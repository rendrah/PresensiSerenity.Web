namespace PresensiSerenity.Master { 
    @Serenity.Decorators.registerFormatter() 
    export class GenderFormatter implements Slick.Formatter { 
        format(ctx: Slick.FormatterContext) { 
            var JenisKelamin = parseInt(ctx.value); 
            var enumJenisKelamin = PresensiSerenity.Master.gender; 
 
            if (JenisKelamin == enumJenisKelamin.LakiLaki) { 
                return '<div><i class="fa fa-male text-primary" ></i> Laki Laki</div>'; 
            } else if (JenisKelamin == enumJenisKelamin.Perempuan) { 
                return '<div><i class="fa fa-female text-danger"></i> Perempuan</div>'; 
            } 
        } 
    } 
} 