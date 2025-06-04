namespace Bnb.UnitTests;

[TestClass]
public sealed class BaseTests
{
    [TestMethod]
    public void BaseTest_Always_Pass()
    {
        const bool expected = true;
        const bool actual = true;
        
        Assert.AreEqual(expected, actual);
    }
}