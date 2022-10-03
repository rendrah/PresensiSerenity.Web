namespace PresensiSerenity
{
    public interface IDataMigrations
    {
        bool SkippedMigrations { get; }

        void Initialize();
    }
}