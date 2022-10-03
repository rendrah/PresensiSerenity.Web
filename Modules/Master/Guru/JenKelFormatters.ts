namespace PresensiSerenity.Master {
    @Serenity.Decorators.registerFormatter()
    export class JenKelFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var JenisKelamin = parseInt(ctx.value);
            var enumJenisKelamin = PresensiSerenity.Master.JenKel;
            if (JenisKelamin == enumJenisKelamin.LakiLaki) {
                return `<div><i class="fa fa-male "></i>Laki Laki</div>`;
            } else if (JenisKelamin == enumJenisKelamin.Perempuan) {
                return `<div><i class="fa fa-female "></i>Perempuan</div>`;
            }
        }
    }
}