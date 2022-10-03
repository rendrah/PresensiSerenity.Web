namespace PresensiSerenity.Master {
    export enum AgaMa {
        Islam = 1,
        Kristen = 2,
        Katolik = 3,
        Hindu = 4,
        Budha = 5,
        Konghucu = 6
    }
    Serenity.Decorators.registerEnumType(AgaMa, 'PresensiSerenity.Master.AgaMa', 'Master.AgaMa');
}
