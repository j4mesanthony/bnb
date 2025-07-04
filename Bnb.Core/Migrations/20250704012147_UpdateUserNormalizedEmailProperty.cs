using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bnb.Core.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUserNormalizedEmailProperty : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("UPDATE Users SET NormalizedEmail = UPPER(Email) WHERE Email IS NOT NULL;");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
