﻿var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var LanguageColumns = /** @class */ (function () {
            function LanguageColumns() {
            }
            LanguageColumns.columnsKey = 'Administration.Language';
            return LanguageColumns;
        }());
        Administration.LanguageColumns = LanguageColumns;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var PermissionKeys;
        (function (PermissionKeys) {
            PermissionKeys.Security = "Administration:Security";
            PermissionKeys.Translation = "Administration:Translation";
        })(PermissionKeys = Administration.PermissionKeys || (Administration.PermissionKeys = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var RoleColumns = /** @class */ (function () {
            function RoleColumns() {
            }
            RoleColumns.columnsKey = 'Administration.Role';
            return RoleColumns;
        }());
        Administration.RoleColumns = RoleColumns;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var UserColumns = /** @class */ (function () {
            function UserColumns() {
            }
            UserColumns.columnsKey = 'Administration.User';
            return UserColumns;
        }());
        Administration.UserColumns = UserColumns;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var Agama;
        (function (Agama) {
            Agama[Agama["Islam"] = 1] = "Islam";
            Agama[Agama["Kristen"] = 2] = "Kristen";
            Agama[Agama["Katolik"] = 3] = "Katolik";
            Agama[Agama["Hindu"] = 4] = "Hindu";
            Agama[Agama["Budha"] = 5] = "Budha";
            Agama[Agama["Khonghucu"] = 6] = "Khonghucu";
        })(Agama = Master.Agama || (Master.Agama = {}));
        Serenity.Decorators.registerEnumType(Agama, 'PresensiSerenity.Master.Agama', 'Siswa.Agama');
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var GuruColumns = /** @class */ (function () {
            function GuruColumns() {
            }
            GuruColumns.columnsKey = 'Master.Guru';
            return GuruColumns;
        }());
        Master.GuruColumns = GuruColumns;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var GuruForm = /** @class */ (function (_super) {
            __extends(GuruForm, _super);
            function GuruForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!GuruForm.init) {
                    GuruForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.EnumEditor;
                    Q.initFormType(GuruForm, [
                        'Nip', w0,
                        'Nama', w0,
                        'Tempat', w0,
                        'Tanggallahir', w1,
                        'JenisKelamin', w2,
                        'Agama', w2,
                        'Alamat', w0,
                        'Status', w2
                    ]);
                }
                return _this;
            }
            GuruForm.formKey = 'Master.Guru';
            return GuruForm;
        }(Serenity.PrefixedContext));
        Master.GuruForm = GuruForm;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var GuruRow;
        (function (GuruRow) {
            GuruRow.idProperty = 'Id';
            GuruRow.nameProperty = 'Nama';
            GuruRow.localTextPrefix = 'Master.Guru';
            GuruRow.deletePermission = 'Administration:General';
            GuruRow.insertPermission = 'Administration:General';
            GuruRow.readPermission = 'Administration:General';
            GuruRow.updatePermission = 'Administration:General';
        })(GuruRow = Master.GuruRow || (Master.GuruRow = {}));
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var GuruService;
        (function (GuruService) {
            GuruService.baseUrl = 'Master/Guru';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                GuruService[x] = function (r, s, o) {
                    return Q.serviceRequest(GuruService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(GuruService = Master.GuruService || (Master.GuruService = {}));
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var JenKel;
        (function (JenKel) {
            JenKel[JenKel["LakiLaki"] = 1] = "LakiLaki";
            JenKel[JenKel["Perempuan"] = 2] = "Perempuan";
        })(JenKel = Master.JenKel || (Master.JenKel = {}));
        Serenity.Decorators.registerEnumType(JenKel, 'PresensiSerenity.Master.JenKel', 'Master.JenKel');
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var JurusanColumns = /** @class */ (function () {
            function JurusanColumns() {
            }
            JurusanColumns.columnsKey = 'Master.Jurusan';
            return JurusanColumns;
        }());
        Master.JurusanColumns = JurusanColumns;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var JurusanForm = /** @class */ (function (_super) {
            __extends(JurusanForm, _super);
            function JurusanForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!JurusanForm.init) {
                    JurusanForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(JurusanForm, [
                        'NamaJurusan', w0
                    ]);
                }
                return _this;
            }
            JurusanForm.formKey = 'Master.Jurusan';
            return JurusanForm;
        }(Serenity.PrefixedContext));
        Master.JurusanForm = JurusanForm;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var JurusanRow;
        (function (JurusanRow) {
            JurusanRow.idProperty = 'IdJurusan';
            JurusanRow.nameProperty = 'NamaJurusan';
            JurusanRow.localTextPrefix = 'Master.Jurusan';
            JurusanRow.lookupKey = 'Master.Jurusan';
            function getLookup() {
                return Q.getLookup('Master.Jurusan');
            }
            JurusanRow.getLookup = getLookup;
            JurusanRow.deletePermission = 'Jurusan:Modify';
            JurusanRow.insertPermission = 'Jurusan:Modify';
            JurusanRow.readPermission = 'Jurusan:View';
            JurusanRow.updatePermission = 'Jurusan:Modify';
        })(JurusanRow = Master.JurusanRow || (Master.JurusanRow = {}));
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var JurusanService;
        (function (JurusanService) {
            JurusanService.baseUrl = 'Master/Jurusan';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                JurusanService[x] = function (r, s, o) {
                    return Q.serviceRequest(JurusanService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(JurusanService = Master.JurusanService || (Master.JurusanService = {}));
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var KelasColumns = /** @class */ (function () {
            function KelasColumns() {
            }
            KelasColumns.columnsKey = 'Master.Kelas';
            return KelasColumns;
        }());
        Master.KelasColumns = KelasColumns;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var KelasForm = /** @class */ (function (_super) {
            __extends(KelasForm, _super);
            function KelasForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!KelasForm.init) {
                    KelasForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = Master.SiswaDetailEditor;
                    Q.initFormType(KelasForm, [
                        'NamaKelas', w0,
                        'JurusanId', w1,
                        'SiswaDetail', w2
                    ]);
                }
                return _this;
            }
            KelasForm.formKey = 'Master.Kelas';
            return KelasForm;
        }(Serenity.PrefixedContext));
        Master.KelasForm = KelasForm;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var KelasRow;
        (function (KelasRow) {
            KelasRow.idProperty = 'IdKelas';
            KelasRow.nameProperty = 'NamaKelas';
            KelasRow.localTextPrefix = 'Master.Kelas';
            KelasRow.lookupKey = 'Master.Kelas';
            function getLookup() {
                return Q.getLookup('Master.Kelas');
            }
            KelasRow.getLookup = getLookup;
            KelasRow.deletePermission = 'Kelas:Modify';
            KelasRow.insertPermission = 'Kelas:Modify';
            KelasRow.readPermission = 'Kelas:View';
            KelasRow.updatePermission = 'Kelas:Modify';
        })(KelasRow = Master.KelasRow || (Master.KelasRow = {}));
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var KelasService;
        (function (KelasService) {
            KelasService.baseUrl = 'Master/Kelas';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                KelasService[x] = function (r, s, o) {
                    return Q.serviceRequest(KelasService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(KelasService = Master.KelasService || (Master.KelasService = {}));
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var SiswaColumns = /** @class */ (function () {
            function SiswaColumns() {
            }
            SiswaColumns.columnsKey = 'Master.Siswa';
            return SiswaColumns;
        }());
        Master.SiswaColumns = SiswaColumns;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var SiswaForm = /** @class */ (function (_super) {
            __extends(SiswaForm, _super);
            function SiswaForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SiswaForm.init) {
                    SiswaForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.EnumEditor;
                    var w3 = s.LookupEditor;
                    Q.initFormType(SiswaForm, [
                        'Nis', w0,
                        'Nama', w0,
                        'Tempat', w0,
                        'TanggalLahir', w1,
                        'JenisKelamin', w2,
                        'Agama', w2,
                        'NoHp', w0,
                        'Alamat', w0,
                        'NamaAyah', w0,
                        'NamaIbu', w0,
                        'KelasId', w3
                    ]);
                }
                return _this;
            }
            SiswaForm.formKey = 'Master.Siswa';
            return SiswaForm;
        }(Serenity.PrefixedContext));
        Master.SiswaForm = SiswaForm;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var SiswaRow;
        (function (SiswaRow) {
            SiswaRow.idProperty = 'Id';
            SiswaRow.nameProperty = 'Nama';
            SiswaRow.localTextPrefix = 'Master.Siswa';
            SiswaRow.lookupKey = 'Master.Siswa';
            function getLookup() {
                return Q.getLookup('Master.Siswa');
            }
            SiswaRow.getLookup = getLookup;
            SiswaRow.deletePermission = 'Siswa:General';
            SiswaRow.insertPermission = 'Siswa:General';
            SiswaRow.readPermission = 'Siswa:General';
            SiswaRow.updatePermission = 'Siswa:General';
        })(SiswaRow = Master.SiswaRow || (Master.SiswaRow = {}));
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var SiswaService;
        (function (SiswaService) {
            SiswaService.baseUrl = 'Master/Siswa';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SiswaService[x] = function (r, s, o) {
                    return Q.serviceRequest(SiswaService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SiswaService = Master.SiswaService || (Master.SiswaService = {}));
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var StaTus;
        (function (StaTus) {
            StaTus[StaTus["Piket"] = 1] = "Piket";
            StaTus[StaTus["Guru"] = 2] = "Guru";
        })(StaTus = Master.StaTus || (Master.StaTus = {}));
        Serenity.Decorators.registerEnumType(StaTus, 'PresensiSerenity.Master.StaTus', 'Master.StaTus');
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var gender;
        (function (gender) {
            gender[gender["LakiLaki"] = 1] = "LakiLaki";
            gender[gender["Perempuan"] = 2] = "Perempuan";
        })(gender = Master.gender || (Master.gender = {}));
        Serenity.Decorators.registerEnumType(gender, 'PresensiSerenity.Master.gender', 'Siswa.gender');
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = PresensiSerenity.Membership || (PresensiSerenity.Membership = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailAddressEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = PresensiSerenity.Membership || (PresensiSerenity.Membership = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = PresensiSerenity.Membership || (PresensiSerenity.Membership = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = PresensiSerenity.Membership || (PresensiSerenity.Membership = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailAddressEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = PresensiSerenity.Membership || (PresensiSerenity.Membership = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Presensi;
    (function (Presensi) {
        var AbsenColumns = /** @class */ (function () {
            function AbsenColumns() {
            }
            AbsenColumns.columnsKey = 'Presensi.Absen';
            return AbsenColumns;
        }());
        Presensi.AbsenColumns = AbsenColumns;
    })(Presensi = PresensiSerenity.Presensi || (PresensiSerenity.Presensi = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Presensi;
    (function (Presensi) {
        var AbsenForm = /** @class */ (function (_super) {
            __extends(AbsenForm, _super);
            function AbsenForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AbsenForm.init) {
                    AbsenForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.EnumEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.LookupEditor;
                    Q.initFormType(AbsenForm, [
                        'Tanggal', w0,
                        'Ijin', w1,
                        'Image', w2,
                        'Status', w3,
                        'SiswaId', w4,
                        'GuruId', w3
                    ]);
                }
                return _this;
            }
            AbsenForm.formKey = 'Presensi.Absen';
            return AbsenForm;
        }(Serenity.PrefixedContext));
        Presensi.AbsenForm = AbsenForm;
    })(Presensi = PresensiSerenity.Presensi || (PresensiSerenity.Presensi = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Presensi;
    (function (Presensi) {
        var AbsenRow;
        (function (AbsenRow) {
            AbsenRow.idProperty = 'Id';
            AbsenRow.nameProperty = 'Ijin';
            AbsenRow.localTextPrefix = 'Presensi.Absen';
            AbsenRow.deletePermission = 'Absensi:Modify';
            AbsenRow.insertPermission = 'Absensi:Modify';
            AbsenRow.readPermission = 'Absensi:View';
            AbsenRow.updatePermission = 'Absensi:Modify';
        })(AbsenRow = Presensi.AbsenRow || (Presensi.AbsenRow = {}));
    })(Presensi = PresensiSerenity.Presensi || (PresensiSerenity.Presensi = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Presensi;
    (function (Presensi) {
        var AbsenService;
        (function (AbsenService) {
            AbsenService.baseUrl = 'Presensi/Absen';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AbsenService[x] = function (r, s, o) {
                    return Q.serviceRequest(AbsenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AbsenService = Presensi.AbsenService || (Presensi.AbsenService = {}));
    })(Presensi = PresensiSerenity.Presensi || (PresensiSerenity.Presensi = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Presensi;
    (function (Presensi) {
        var Ijintype;
        (function (Ijintype) {
            Ijintype[Ijintype["Sakit"] = 1] = "Sakit";
            Ijintype[Ijintype["Alpha"] = 2] = "Alpha";
            Ijintype[Ijintype["Izin"] = 3] = "Izin";
        })(Ijintype = Presensi.Ijintype || (Presensi.Ijintype = {}));
        Serenity.Decorators.registerEnumType(Ijintype, 'PresensiSerenity.Presensi.Ijintype', 'Absensi.Ijin');
    })(Presensi = PresensiSerenity.Presensi || (PresensiSerenity.Presensi = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Texts;
    (function (Texts) {
        PresensiSerenity['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Master: { Guru: { Agama: 1, Alamat: 1, Id: 1, JenisKelamin: 1, Nama: 1, Nip: 1, Status: 1, Tanggallahir: 1, Tempat: 1 }, Jurusan: { IdJurusan: 1, NamaJurusan: 1 }, Kelas: { IdKelas: 1, JurusanId: 1, JurusanNamaJurusan: 1, NamaKelas: 1, SiswaDetail: 1 }, Siswa: { Agama: 1, Alamat: 1, Id: 1, JenisKelamin: 1, KelasId: 1, KelasJurusanId: 1, KelasNamaKelas: 1, Nama: 1, NamaAyah: 1, NamaIbu: 1, Nis: 1, NoHp: 1, TanggalLahir: 1, Tempat: 1 } }, Presensi: { Absen: { GuruAgama: 1, GuruAlamat: 1, GuruId: 1, GuruJenisKelamin: 1, GuruNama: 1, GuruNip: 1, GuruStatus: 1, GuruTanggallahir: 1, GuruTempat: 1, Id: 1, Ijin: 1, Image: 1, SiswaAgama: 1, SiswaAlamat: 1, SiswaId: 1, SiswaJenisKelamin: 1, SiswaKelasId: 1, SiswaNama: 1, SiswaNamaAyah: 1, SiswaNamaIbu: 1, SiswaNis: 1, SiswaNoHp: 1, SiswaTanggalLahir: 1, SiswaTempat: 1, Status: 1, Tanggal: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, GoogleButton: 1, LoginToYourAccount: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = PresensiSerenity.Texts || (PresensiSerenity.Texts = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            return Q.Authorization.hasPermission(permissionKey);
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = PresensiSerenity.Authorization || (PresensiSerenity.Authorization = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys');
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        cssClass: 'btn btn-primary',
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        cssClass: 'btn btn-primary',
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = PresensiSerenity.Administration || (PresensiSerenity.Administration = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = PresensiSerenity.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = PresensiSerenity.LanguageList || (PresensiSerenity.LanguageList = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var PresensiSerenity;
(function (PresensiSerenity) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('PresensiSerenity');
        Serenity.EntityDialog.defaultLanguageList = PresensiSerenity.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = PresensiSerenity.ScriptInitialization || (PresensiSerenity.ScriptInitialization = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = PresensiSerenity.Common || (PresensiSerenity.Common = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var GuruDialog = /** @class */ (function (_super) {
            __extends(GuruDialog, _super);
            function GuruDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.GuruForm(_this.idPrefix);
                return _this;
            }
            GuruDialog.prototype.getFormKey = function () { return Master.GuruForm.formKey; };
            GuruDialog.prototype.getIdProperty = function () { return Master.GuruRow.idProperty; };
            GuruDialog.prototype.getLocalTextPrefix = function () { return Master.GuruRow.localTextPrefix; };
            GuruDialog.prototype.getNameProperty = function () { return Master.GuruRow.nameProperty; };
            GuruDialog.prototype.getService = function () { return Master.GuruService.baseUrl; };
            GuruDialog.prototype.getDeletePermission = function () { return Master.GuruRow.deletePermission; };
            GuruDialog.prototype.getInsertPermission = function () { return Master.GuruRow.insertPermission; };
            GuruDialog.prototype.getUpdatePermission = function () { return Master.GuruRow.updatePermission; };
            GuruDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GuruDialog);
            return GuruDialog;
        }(Serenity.EntityDialog));
        Master.GuruDialog = GuruDialog;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var GuruGrid = /** @class */ (function (_super) {
            __extends(GuruGrid, _super);
            function GuruGrid(container) {
                return _super.call(this, container) || this;
            }
            GuruGrid.prototype.getColumnsKey = function () { return Master.GuruColumns.columnsKey; };
            GuruGrid.prototype.getDialogType = function () { return Master.GuruDialog; };
            GuruGrid.prototype.getIdProperty = function () { return Master.GuruRow.idProperty; };
            GuruGrid.prototype.getInsertPermission = function () { return Master.GuruRow.insertPermission; };
            GuruGrid.prototype.getLocalTextPrefix = function () { return Master.GuruRow.localTextPrefix; };
            GuruGrid.prototype.getService = function () { return Master.GuruService.baseUrl; };
            GuruGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: Master.GuruService.baseUrl + '/ListExcel',
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            GuruGrid.prototype.getQuickSearchFields = function () {
                var txt = function (s) {
                    return Q.text("Db.".concat(Master.GuruRow.localTextPrefix, ".").concat(s)).toLowerCase();
                };
                return [
                    { name: "", title: "all" },
                    { name: "Nip" /* Nip */, title: txt("Nip" /* Nip */) },
                    { name: "Nama" /* Nama */, title: txt("Nama" /* Nama */) },
                    { name: "Alamat" /* Alamat */, title: txt("Alamat" /* Alamat */) }
                ];
            };
            GuruGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], GuruGrid);
            return GuruGrid;
        }(Serenity.EntityGrid));
        Master.GuruGrid = GuruGrid;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var JenKelFormatter = /** @class */ (function () {
            function JenKelFormatter() {
            }
            JenKelFormatter.prototype.format = function (ctx) {
                var JenisKelamin = parseInt(ctx.value);
                var enumJenisKelamin = PresensiSerenity.Master.JenKel;
                if (JenisKelamin == enumJenisKelamin.LakiLaki) {
                    return "<div><i class=\"fa fa-male \"></i>Laki Laki</div>";
                }
                else if (JenisKelamin == enumJenisKelamin.Perempuan) {
                    return "<div><i class=\"fa fa-female \"></i>Perempuan</div>";
                }
            };
            JenKelFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], JenKelFormatter);
            return JenKelFormatter;
        }());
        Master.JenKelFormatter = JenKelFormatter;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var JurusanDialog = /** @class */ (function (_super) {
            __extends(JurusanDialog, _super);
            function JurusanDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.JurusanForm(_this.idPrefix);
                return _this;
            }
            JurusanDialog.prototype.getFormKey = function () { return Master.JurusanForm.formKey; };
            JurusanDialog.prototype.getIdProperty = function () { return Master.JurusanRow.idProperty; };
            JurusanDialog.prototype.getLocalTextPrefix = function () { return Master.JurusanRow.localTextPrefix; };
            JurusanDialog.prototype.getNameProperty = function () { return Master.JurusanRow.nameProperty; };
            JurusanDialog.prototype.getService = function () { return Master.JurusanService.baseUrl; };
            JurusanDialog.prototype.getDeletePermission = function () { return Master.JurusanRow.deletePermission; };
            JurusanDialog.prototype.getInsertPermission = function () { return Master.JurusanRow.insertPermission; };
            JurusanDialog.prototype.getUpdatePermission = function () { return Master.JurusanRow.updatePermission; };
            JurusanDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], JurusanDialog);
            return JurusanDialog;
        }(Serenity.EntityDialog));
        Master.JurusanDialog = JurusanDialog;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var JurusanGrid = /** @class */ (function (_super) {
            __extends(JurusanGrid, _super);
            function JurusanGrid(container) {
                return _super.call(this, container) || this;
            }
            JurusanGrid.prototype.getColumnsKey = function () { return Master.JurusanColumns.columnsKey; };
            JurusanGrid.prototype.getDialogType = function () { return Master.JurusanDialog; };
            JurusanGrid.prototype.getIdProperty = function () { return Master.JurusanRow.idProperty; };
            JurusanGrid.prototype.getInsertPermission = function () { return Master.JurusanRow.insertPermission; };
            JurusanGrid.prototype.getLocalTextPrefix = function () { return Master.JurusanRow.localTextPrefix; };
            JurusanGrid.prototype.getService = function () { return Master.JurusanService.baseUrl; };
            JurusanGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], JurusanGrid);
            return JurusanGrid;
        }(Serenity.EntityGrid));
        Master.JurusanGrid = JurusanGrid;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var DetailSiswaEditorDialog = /** @class */ (function (_super) {
            __extends(DetailSiswaEditorDialog, _super);
            function DetailSiswaEditorDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Master.SiswaForm(_this.idPrefix);
                return _this;
            }
            DetailSiswaEditorDialog.prototype.getFormKey = function () { return Master.SiswaForm.formKey; };
            DetailSiswaEditorDialog.prototype.getLocalTextPrefix = function () { return Master.SiswaRow.localTextPrefix; };
            DetailSiswaEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DetailSiswaEditorDialog);
            return DetailSiswaEditorDialog;
        }(Serenity.Extensions.GridEditorDialog));
        Master.DetailSiswaEditorDialog = DetailSiswaEditorDialog;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var KelasDialog = /** @class */ (function (_super) {
            __extends(KelasDialog, _super);
            function KelasDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.KelasForm(_this.idPrefix);
                return _this;
            }
            KelasDialog.prototype.getFormKey = function () { return Master.KelasForm.formKey; };
            KelasDialog.prototype.getIdProperty = function () { return Master.KelasRow.idProperty; };
            KelasDialog.prototype.getLocalTextPrefix = function () { return Master.KelasRow.localTextPrefix; };
            KelasDialog.prototype.getNameProperty = function () { return Master.KelasRow.nameProperty; };
            KelasDialog.prototype.getService = function () { return Master.KelasService.baseUrl; };
            KelasDialog.prototype.getDeletePermission = function () { return Master.KelasRow.deletePermission; };
            KelasDialog.prototype.getInsertPermission = function () { return Master.KelasRow.insertPermission; };
            KelasDialog.prototype.getUpdatePermission = function () { return Master.KelasRow.updatePermission; };
            KelasDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], KelasDialog);
            return KelasDialog;
        }(Serenity.EntityDialog));
        Master.KelasDialog = KelasDialog;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var KelasGrid = /** @class */ (function (_super) {
            __extends(KelasGrid, _super);
            function KelasGrid(container) {
                return _super.call(this, container) || this;
            }
            KelasGrid.prototype.getColumnsKey = function () { return Master.KelasColumns.columnsKey; };
            KelasGrid.prototype.getDialogType = function () { return Master.KelasDialog; };
            KelasGrid.prototype.getIdProperty = function () { return Master.KelasRow.idProperty; };
            KelasGrid.prototype.getInsertPermission = function () { return Master.KelasRow.insertPermission; };
            KelasGrid.prototype.getLocalTextPrefix = function () { return Master.KelasRow.localTextPrefix; };
            KelasGrid.prototype.getService = function () { return Master.KelasService.baseUrl; };
            KelasGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], KelasGrid);
            return KelasGrid;
        }(Serenity.EntityGrid));
        Master.KelasGrid = KelasGrid;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var SiswaDetailEditor = /** @class */ (function (_super) {
            __extends(SiswaDetailEditor, _super);
            function SiswaDetailEditor(container) {
                return _super.call(this, container) || this;
            }
            SiswaDetailEditor.prototype.getColumnsKey = function () { return Master.SiswaColumns.columnsKey; };
            SiswaDetailEditor.prototype.getDialogType = function () { return Master.DetailSiswaEditorDialog; };
            SiswaDetailEditor.prototype.getLocalTextPrefix = function () { return Master.SiswaRow.localTextPrefix; };
            SiswaDetailEditor.prototype.getAddButtonCaption = function () {
                return "Add";
            };
            SiswaDetailEditor = __decorate([
                Serenity.Decorators.registerEditor("PresensiSerenity.SiswaDetailEditor")
            ], SiswaDetailEditor);
            return SiswaDetailEditor;
        }(Serenity.Extensions.GridEditorBase));
        Master.SiswaDetailEditor = SiswaDetailEditor;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var GenderFormatter = /** @class */ (function () {
            function GenderFormatter() {
            }
            GenderFormatter.prototype.format = function (ctx) {
                var JenisKelamin = parseInt(ctx.value);
                var enumJenisKelamin = PresensiSerenity.Master.gender;
                if (JenisKelamin == enumJenisKelamin.LakiLaki) {
                    return '<div><i class="fa fa-male text-primary" ></i> Laki Laki</div>';
                }
                else if (JenisKelamin == enumJenisKelamin.Perempuan) {
                    return '<div><i class="fa fa-female text-danger"></i> Perempuan</div>';
                }
            };
            GenderFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], GenderFormatter);
            return GenderFormatter;
        }());
        Master.GenderFormatter = GenderFormatter;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var SiswaDialog = /** @class */ (function (_super) {
            __extends(SiswaDialog, _super);
            function SiswaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Master.SiswaForm(_this.idPrefix);
                return _this;
            }
            SiswaDialog.prototype.getFormKey = function () { return Master.SiswaForm.formKey; };
            SiswaDialog.prototype.getIdProperty = function () { return Master.SiswaRow.idProperty; };
            SiswaDialog.prototype.getLocalTextPrefix = function () { return Master.SiswaRow.localTextPrefix; };
            SiswaDialog.prototype.getNameProperty = function () { return Master.SiswaRow.nameProperty; };
            SiswaDialog.prototype.getService = function () { return Master.SiswaService.baseUrl; };
            SiswaDialog.prototype.getDeletePermission = function () { return Master.SiswaRow.deletePermission; };
            SiswaDialog.prototype.getInsertPermission = function () { return Master.SiswaRow.insertPermission; };
            SiswaDialog.prototype.getUpdatePermission = function () { return Master.SiswaRow.updatePermission; };
            SiswaDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SiswaDialog);
            return SiswaDialog;
        }(Serenity.EntityDialog));
        Master.SiswaDialog = SiswaDialog;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Master;
    (function (Master) {
        var SiswaGrid = /** @class */ (function (_super) {
            __extends(SiswaGrid, _super);
            function SiswaGrid(container) {
                return _super.call(this, container) || this;
            }
            SiswaGrid.prototype.getColumnsKey = function () { return Master.SiswaColumns.columnsKey; };
            SiswaGrid.prototype.getDialogType = function () { return Master.SiswaDialog; };
            SiswaGrid.prototype.getIdProperty = function () { return Master.SiswaRow.idProperty; };
            SiswaGrid.prototype.getInsertPermission = function () { return Master.SiswaRow.insertPermission; };
            SiswaGrid.prototype.getLocalTextPrefix = function () { return Master.SiswaRow.localTextPrefix; };
            SiswaGrid.prototype.getService = function () { return Master.SiswaService.baseUrl; };
            SiswaGrid.prototype.getQuickSearchFields = function () {
                var txt = function (s) {
                    return Q.text("Db.".concat(Master.SiswaRow.localTextPrefix, ".").concat(s)).toLowerCase();
                };
                return [
                    { name: "", title: "all" },
                    { name: "Nis" /* Nis */, title: txt("Nis" /* Nis */) },
                    { name: "Nama" /* Nama */, title: txt("Nama" /* Nama */) },
                    { name: "Alamat" /* Alamat */, title: txt("Alamat" /* Alamat */) },
                    { name: "JenisKelamin" /* JenisKelamin */, title: txt("JenisKelamin" /* JenisKelamin */) }
                ];
            };
            SiswaGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: Master.SiswaService.baseUrl + '/ListExcel',
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            SiswaGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 80;
                opt.enableTextSelectionOnCells = true;
                opt.selectedCellCssClass = "slick-row-selected";
                opt.enableCellNavigation = true;
                return opt;
            };
            SiswaGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                grid.setSelectionModel(new Slick.RowSelectionModel());
                return grid;
            };
            SiswaGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field == "Nis" /* Nis */; }).format =
                    function (ctx) { return "<a href=\"javascript:;\" class=\"Buku-\n            link\">".concat(Q.htmlEncode(ctx.value), "</a>"); };
                columns.unshift({
                    field: 'Delete Row',
                    name: '',
                    //     format: ctx => '<a class="inline-action delete-row" title="delete 
                    //     "style="cursor: pointer;" > ' +
                    // '<i class="fa fa-trash-o text-red"></i></a>',
                    format: function (ctx) { return "<a class=\"inline-action view-details\" title=\"view-details\" style=\"cursor: pointer;\"><i class=\"fa fa-search\"></i></a>"; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            SiswaGrid.prototype.onClick = function (e, row, cell) {
                // let base grid handle clicks for its edit links
                _super.prototype.onClick.call(this, e, row, cell);
                // if base grid already handled, we shouldn"t handle it again
                if (e.isDefaultPrevented()) {
                    return;
                }
                // get reference to current item
                var item = this.itemAt(row);
                // get reference to clicked element
                var target = $(e.target);
                // if (target.hasClass("Buku-link")) {
                //     e.preventDefault();
                //     let message = Q.format(
                //         "<p>Anda menekan Sebuah Detail Buku</p>" +
                //         "<p>Jika Anda Menekan YES, Maka Itu Akan Membuka Form Buku</p>" +
                //         "<p>Jika Anda Menekan NO, Maka Itu Akan Menutup Dialog</p>",
                //         Q.htmlEncode(item.JudulBuku));
                //     Q.confirm(message, () => {
                //         // CustomerDialog doesn't use CustomerID but ID (identity)
                //         // so need to find customer to get its actual ID
                //         var buku = Q.first(Perpustakaan.BukuRow.getLookup().items,
                //             x => x.JudulBuku == item.JudulBuku);
                //         new Perpustakaan.BukuDialog().loadByIdAndOpenDialog(buku.Id);
                //     },
                //         {
                //             htmlEncode: false,
                //             onNo: () => {
                //                 Q.notifyInfo("Anda Menekan No. Kenapa?")
                //             }
                //         });
                // }
                // else if (target.hasClass("Rak-link")) {
                //     e.preventDefault();
                //     Q.notifySuccess("Anda Memfilter Data Rak " + item.NamaRak);
                //     var rakFilter = this.findQuickFilter(Serenity.LookupEditor,
                //         Perpustakaan.BukuRow.Fields.IdRak);
                //     rakFilter.value = item.IdRak.toString();
                //     this.refresh();
                // }
                // else if (target.hasClass("Kategori-link")) {
                //     e.preventDefault();
                //     Q.notifySuccess("Anda Memfilter Data Kategori " + item.NamaKategori);
                //     var kategoriFilter = this.findQuickFilter(Serenity.LookupEditor,
                //         Perpustakaan.BukuRow.Fields.IdKategori);
                //     kategoriFilter.value = item.IdKategori.toString();
                //     this.refresh();
                // }
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('delete-row')) {
                        //     Q.confirm('Delete record?', () => {
                        //         Perpustakaan.BukuService.Delete({
                        //             EntityId: item.Id,
                        //         }, response => {
                        //             this.refresh();
                        //         });
                        //     });
                    }
                    else if (target.hasClass('view-details')) {
                        // this.editItem(item.Id);
                        var dialog = new PresensiSerenity.Presensi.AbsenDialog();
                        this.initDialog(dialog);
                        dialog.loadEntityAndOpenDialog({
                            SiswaId: item.Id,
                            GuruId: 1
                        });
                    }
                }
            };
            SiswaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SiswaGrid);
            return SiswaGrid;
        }(Serenity.EntityGrid));
        Master.SiswaGrid = SiswaGrid;
    })(Master = PresensiSerenity.Master || (PresensiSerenity.Master = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n    <h2 class=\"text-center p-4\">\n        <img src=\"".concat(Q.resolveUrl("~/Content/site/images/serenity-logo-w-128.png"), "\"\n            class=\"rounded-circle p-1\" style=\"background-color: var(--s-sidebar-band-bg)\"\n            width=\"50\" height=\"50\" /> PresensiSerenity\n    </h2>\n\n    <div class=\"s-Panel p-4\">\n        <h5 class=\"text-center my-4\">").concat(Q.text("Forms.Membership.Login.LoginToYourAccount"), "</h5>\n        <form id=\"~_Form\" action=\"\">\n            <div id=\"~_PropertyGrid\"></div>\n            <div class=\"px-field\">\n                <a class=\"float-end text-decoration-none\" href=\"").concat(Q.resolveUrl('~/Account/ForgotPassword'), "\">\n                    ").concat(Q.text("Forms.Membership.Login.ForgotPassword"), "\n                </a>\n            </div>\n            <div class=\"px-field\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary my-3 w-100\">\n                    ").concat(Q.text("Forms.Membership.Login.SignInButton"), "\n                </button>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"text-center mt-2\">\n        <a class=\"text-decoration-none\" href=\"").concat(Q.resolveUrl('~/Account/SignUp'), "\">").concat(Q.text("Forms.Membership.Login.SignUpButton"), "</a>\n    </div>   \n");
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = PresensiSerenity.Membership || (PresensiSerenity.Membership = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel.prototype.getTemplate = function () {
                return "<div class=\"s-Panel\">\n    <h3 class=\"page-title mb-4 text-center\">".concat(Q.text("Forms.Membership.ChangePassword.FormTitle"), "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div id=\"~_PropertyGrid\"></div>\n        <div class=\"px-field mt-4\">\n            <button id=\"~_SubmitButton\" type=\"submit\" class=\"btn btn-primary w-100\">\n                ").concat(Q.text("Forms.Membership.ChangePassword.SubmitButton"), "\n            </button>\n        </div>\n    </form>\n</div>");
            };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = PresensiSerenity.Membership || (PresensiSerenity.Membership = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = PresensiSerenity.Membership || (PresensiSerenity.Membership = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.NewPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = PresensiSerenity.Membership || (PresensiSerenity.Membership = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = PresensiSerenity.Membership || (PresensiSerenity.Membership = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Presensi;
    (function (Presensi) {
        var AbsenDialog = /** @class */ (function (_super) {
            __extends(AbsenDialog, _super);
            function AbsenDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Presensi.AbsenForm(_this.idPrefix);
                return _this;
            }
            AbsenDialog.prototype.getFormKey = function () { return Presensi.AbsenForm.formKey; };
            AbsenDialog.prototype.getIdProperty = function () { return Presensi.AbsenRow.idProperty; };
            AbsenDialog.prototype.getLocalTextPrefix = function () { return Presensi.AbsenRow.localTextPrefix; };
            AbsenDialog.prototype.getNameProperty = function () { return Presensi.AbsenRow.nameProperty; };
            AbsenDialog.prototype.getService = function () { return Presensi.AbsenService.baseUrl; };
            AbsenDialog.prototype.getDeletePermission = function () { return Presensi.AbsenRow.deletePermission; };
            AbsenDialog.prototype.getInsertPermission = function () { return Presensi.AbsenRow.insertPermission; };
            AbsenDialog.prototype.getUpdatePermission = function () { return Presensi.AbsenRow.updatePermission; };
            AbsenDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AbsenDialog);
            return AbsenDialog;
        }(Serenity.EntityDialog));
        Presensi.AbsenDialog = AbsenDialog;
    })(Presensi = PresensiSerenity.Presensi || (PresensiSerenity.Presensi = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
var PresensiSerenity;
(function (PresensiSerenity) {
    var Presensi;
    (function (Presensi) {
        var AbsenGrid = /** @class */ (function (_super) {
            __extends(AbsenGrid, _super);
            function AbsenGrid(container) {
                return _super.call(this, container) || this;
            }
            AbsenGrid.prototype.getColumnsKey = function () { return Presensi.AbsenColumns.columnsKey; };
            AbsenGrid.prototype.getDialogType = function () { return Presensi.AbsenDialog; };
            AbsenGrid.prototype.getIdProperty = function () { return Presensi.AbsenRow.idProperty; };
            AbsenGrid.prototype.getInsertPermission = function () { return Presensi.AbsenRow.insertPermission; };
            AbsenGrid.prototype.getLocalTextPrefix = function () { return Presensi.AbsenRow.localTextPrefix; };
            AbsenGrid.prototype.getService = function () { return Presensi.AbsenService.baseUrl; };
            AbsenGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AbsenGrid);
            return AbsenGrid;
        }(Serenity.EntityGrid));
        Presensi.AbsenGrid = AbsenGrid;
    })(Presensi = PresensiSerenity.Presensi || (PresensiSerenity.Presensi = {}));
})(PresensiSerenity || (PresensiSerenity = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlc2Vuc2lTZXJlbml0eS5XZWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25JdGVtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVMaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZUxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVVcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWFzdGVyLkFnYW1hLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01hc3Rlci5HdXJ1Q29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYXN0ZXIuR3VydUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWFzdGVyLkd1cnVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWFzdGVyLkd1cnVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01hc3Rlci5KZW5LZWwudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWFzdGVyLkp1cnVzYW5Db2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01hc3Rlci5KdXJ1c2FuRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYXN0ZXIuSnVydXNhblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYXN0ZXIuSnVydXNhblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWFzdGVyLktlbGFzQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYXN0ZXIuS2VsYXNGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01hc3Rlci5LZWxhc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYXN0ZXIuS2VsYXNTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01hc3Rlci5TaXN3YUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWFzdGVyLlNpc3dhRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYXN0ZXIuU2lzd2FSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWFzdGVyLlNpc3dhU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NYXN0ZXIuU3RhVHVzLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01hc3Rlci5nZW5kZXIudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Mb2dpbkZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5Mb2dpblJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlNpZ25VcFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUHJlc2Vuc2kuQWJzZW5Db2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1ByZXNlbnNpLkFic2VuRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QcmVzZW5zaS5BYnNlblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QcmVzZW5zaS5BYnNlblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUHJlc2Vuc2kuSWppbnR5cGUudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2NyaXB0VXNlckRlZmluaXRpb24udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvVGV4dHMudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9MYW5ndWFnZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1JvbGUvUm9sZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vUm9sZVBlcm1pc3Npb25EaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1RyYW5zbGF0aW9uR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9Vc2VyRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL1VzZXJHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL0F1dGhlbnRpY2F0aW9uL0F1dGhvcml6YXRpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1Blcm1pc3Npb25DaGVja0VkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vVXNlclBlcm1pc3Npb25EaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1JvbGVDaGVja0VkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvVXNlclJvbGVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0xhbmd1YWdlTGlzdC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1NjcmlwdEluaXRpYWxpemF0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vTmF2aWdhdGlvbi9TaWRlYmFyU2VhcmNoLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NYXN0ZXIvR3VydS9HdXJ1RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NYXN0ZXIvR3VydS9HdXJ1R3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWFzdGVyL0d1cnUvSmVuS2VsRm9ybWF0dGVycy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWFzdGVyL0p1cnVzYW4vSnVydXNhbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWFzdGVyL0p1cnVzYW4vSnVydXNhbkdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01hc3Rlci9LZWxhcy9EZXRhaWxTaXN3YUVkaXRvckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWFzdGVyL0tlbGFzL0tlbGFzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NYXN0ZXIvS2VsYXMvS2VsYXNHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NYXN0ZXIvS2VsYXMvU2lzd2FEZXRhaWxFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01hc3Rlci9TaXN3YS9HZW5kZXJGb3JtYXR0ZXIudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01hc3Rlci9TaXN3YS9TaXN3YURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWFzdGVyL1Npc3dhL1Npc3dhR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0xvZ2luUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9DaGFuZ2VQYXNzd29yZC9DaGFuZ2VQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvU2lnblVwL1NpZ25VcFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9QcmVzZW5zaS9BYnNlbi9BYnNlbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvUHJlc2Vuc2kvQWJzZW4vQWJzZW5HcmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsZ0JBQWdCLENBSXpCO0FBSkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLGNBQWMsQ0FJeEM7SUFKMEIsV0FBQSxjQUFjO1FBQ3JDO1lBQUE7WUFFQSxDQUFDO1lBRFUsMEJBQVUsR0FBRyx5QkFBeUIsQ0FBQztZQUNsRCxzQkFBQztTQUFBLEFBRkQsSUFFQztRQUZZLDhCQUFlLGtCQUUzQixDQUFBO0lBQ0wsQ0FBQyxFQUowQixjQUFjLEdBQWQsK0JBQWMsS0FBZCwrQkFBYyxRQUl4QztBQUFELENBQUMsRUFKUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBSXpCO0FDSkQsSUFBVSxnQkFBZ0IsQ0EwQnpCO0FBMUJELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxjQUFjLENBMEJ4QztJQTFCMEIsV0FBQSxjQUFjO1FBTXJDO1lBQWtDLGdDQUF3QjtZQUl0RCxzQkFBWSxNQUFjO2dCQUExQixZQUNJLGtCQUFNLE1BQU0sQ0FBQyxTQWFoQjtnQkFYRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRztvQkFDckIsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRXpCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFFeEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7d0JBQ3pCLFlBQVksRUFBRSxFQUFFO3dCQUNoQixjQUFjLEVBQUUsRUFBRTtxQkFDckIsQ0FBQyxDQUFDO2lCQUNOOztZQUNMLENBQUM7WUFqQk0sb0JBQU8sR0FBRyx5QkFBeUIsQ0FBQztZQWtCL0MsbUJBQUM7U0FBQSxBQW5CRCxDQUFrQyxRQUFRLENBQUMsZUFBZSxHQW1CekQ7UUFuQlksMkJBQVksZUFtQnhCLENBQUE7SUFDTCxDQUFDLEVBMUIwQixjQUFjLEdBQWQsK0JBQWMsS0FBZCwrQkFBYyxRQTBCeEM7QUFBRCxDQUFDLEVBMUJTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUEwQnpCO0FDMUJELElBQVUsZ0JBQWdCLENBMkJ6QjtBQTNCRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsY0FBYyxDQTJCeEM7SUEzQjBCLFdBQUEsY0FBYztRQU9yQyxJQUFpQixXQUFXLENBbUIzQjtRQW5CRCxXQUFpQixXQUFXO1lBQ1gsc0JBQVUsR0FBRyxJQUFJLENBQUM7WUFDbEIsd0JBQVksR0FBRyxjQUFjLENBQUM7WUFDOUIsMkJBQWUsR0FBRyx5QkFBeUIsQ0FBQztZQUM1QyxxQkFBUyxHQUFHLHlCQUF5QixDQUFDO1lBRW5ELFNBQWdCLFNBQVM7Z0JBQ3JCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBYyx5QkFBeUIsQ0FBQyxDQUFDO1lBQy9ELENBQUM7WUFGZSxxQkFBUyxZQUV4QixDQUFBO1lBQ1ksNEJBQWdCLEdBQUcsNEJBQTRCLENBQUM7WUFDaEQsNEJBQWdCLEdBQUcsNEJBQTRCLENBQUM7WUFDaEQsMEJBQWMsR0FBRyw0QkFBNEIsQ0FBQztZQUM5Qyw0QkFBZ0IsR0FBRyw0QkFBNEIsQ0FBQztRQU9qRSxDQUFDLEVBbkJnQixXQUFXLEdBQVgsMEJBQVcsS0FBWCwwQkFBVyxRQW1CM0I7SUFDTCxDQUFDLEVBM0IwQixjQUFjLEdBQWQsK0JBQWMsS0FBZCwrQkFBYyxRQTJCeEM7QUFBRCxDQUFDLEVBM0JTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUEyQnpCO0FDM0JELElBQVUsZ0JBQWdCLENBOEJ6QjtBQTlCRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsY0FBYyxDQThCeEM7SUE5QjBCLFdBQUEsY0FBYztRQUNyQyxJQUFpQixlQUFlLENBNEIvQjtRQTVCRCxXQUFpQixlQUFlO1lBQ2YsdUJBQU8sR0FBRyx5QkFBeUIsQ0FBQztZQWdCakQ7Z0JBQ0ksUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixNQUFNO2FBQ1QsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNELGVBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ3pDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBQSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUE1QmdCLGVBQWUsR0FBZiw4QkFBZSxLQUFmLDhCQUFlLFFBNEIvQjtJQUNMLENBQUMsRUE5QjBCLGNBQWMsR0FBZCwrQkFBYyxLQUFkLCtCQUFjLFFBOEJ4QztBQUFELENBQUMsRUE5QlMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQThCekI7QUM5QkQsSUFBVSxnQkFBZ0IsQ0FLekI7QUFMRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsY0FBYyxDQUt4QztJQUwwQixXQUFBLGNBQWM7UUFDckMsSUFBaUIsY0FBYyxDQUc5QjtRQUhELFdBQWlCLGNBQWM7WUFDZCx1QkFBUSxHQUFHLHlCQUF5QixDQUFDO1lBQ3JDLDBCQUFXLEdBQUcsNEJBQTRCLENBQUM7UUFDNUQsQ0FBQyxFQUhnQixjQUFjLEdBQWQsNkJBQWMsS0FBZCw2QkFBYyxRQUc5QjtJQUNMLENBQUMsRUFMMEIsY0FBYyxHQUFkLCtCQUFjLEtBQWQsK0JBQWMsUUFLeEM7QUFBRCxDQUFDLEVBTFMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUt6QjtBQ0xELElBQVUsZ0JBQWdCLENBSXpCO0FBSkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLGNBQWMsQ0FJeEM7SUFKMEIsV0FBQSxjQUFjO1FBQ3JDO1lBQUE7WUFFQSxDQUFDO1lBRFUsc0JBQVUsR0FBRyxxQkFBcUIsQ0FBQztZQUM5QyxrQkFBQztTQUFBLEFBRkQsSUFFQztRQUZZLDBCQUFXLGNBRXZCLENBQUE7SUFDTCxDQUFDLEVBSjBCLGNBQWMsR0FBZCwrQkFBYyxLQUFkLCtCQUFjLFFBSXhDO0FBQUQsQ0FBQyxFQUpTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFJekI7QUNKRCxJQUFVLGdCQUFnQixDQXdCekI7QUF4QkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLGNBQWMsQ0F3QnhDO0lBeEIwQixXQUFBLGNBQWM7UUFLckM7WUFBOEIsNEJBQXdCO1lBSWxELGtCQUFZLE1BQWM7Z0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBWWhCO2dCQVZHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFHO29CQUNqQixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFckIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUV4QixDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTt3QkFDckIsVUFBVSxFQUFFLEVBQUU7cUJBQ2pCLENBQUMsQ0FBQztpQkFDTjs7WUFDTCxDQUFDO1lBaEJNLGdCQUFPLEdBQUcscUJBQXFCLENBQUM7WUFpQjNDLGVBQUM7U0FBQSxBQWxCRCxDQUE4QixRQUFRLENBQUMsZUFBZSxHQWtCckQ7UUFsQlksdUJBQVEsV0FrQnBCLENBQUE7SUFDTCxDQUFDLEVBeEIwQixjQUFjLEdBQWQsK0JBQWMsS0FBZCwrQkFBYyxRQXdCeEM7QUFBRCxDQUFDLEVBeEJTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUF3QnpCO0FHeEJELElBQVUsZ0JBQWdCLENBd0J6QjtBQXhCRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsY0FBYyxDQXdCeEM7SUF4QjBCLFdBQUEsY0FBYztRQVFyQyxJQUFpQixpQkFBaUIsQ0FlakM7UUFmRCxXQUFpQixpQkFBaUI7WUFDakIsNEJBQVUsR0FBRyxrQkFBa0IsQ0FBQztZQUNoQyw4QkFBWSxHQUFHLGVBQWUsQ0FBQztZQUMvQixpQ0FBZSxHQUFHLCtCQUErQixDQUFDO1lBQ2xELGtDQUFnQixHQUFHLHlCQUF5QixDQUFDO1lBQzdDLGtDQUFnQixHQUFHLHlCQUF5QixDQUFDO1lBQzdDLGdDQUFjLEdBQUcseUJBQXlCLENBQUM7WUFDM0Msa0NBQWdCLEdBQUcseUJBQXlCLENBQUM7UUFROUQsQ0FBQyxFQWZnQixpQkFBaUIsR0FBakIsZ0NBQWlCLEtBQWpCLGdDQUFpQixRQWVqQztJQUNMLENBQUMsRUF4QjBCLGNBQWMsR0FBZCwrQkFBYyxLQUFkLCtCQUFjLFFBd0J4QztBQUFELENBQUMsRUF4QlMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQXdCekI7QUN4QkQsSUFBVSxnQkFBZ0IsQ0FxQnpCO0FBckJELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxjQUFjLENBcUJ4QztJQXJCMEIsV0FBQSxjQUFjO1FBQ3JDLElBQWlCLHFCQUFxQixDQW1CckM7UUFuQkQsV0FBaUIscUJBQXFCO1lBQ3JCLDZCQUFPLEdBQUcsK0JBQStCLENBQUM7WUFVdkQ7Z0JBQ0ksUUFBUTtnQkFDUixNQUFNO2FBQ1QsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNELHFCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUMvQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsc0JBQUEsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBbkJnQixxQkFBcUIsR0FBckIsb0NBQXFCLEtBQXJCLG9DQUFxQixRQW1CckM7SUFDTCxDQUFDLEVBckIwQixjQUFjLEdBQWQsK0JBQWMsS0FBZCwrQkFBYyxRQXFCeEM7QUFBRCxDQUFDLEVBckJTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFxQnpCO0FFckJELElBQVUsZ0JBQWdCLENBeUJ6QjtBQXpCRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsY0FBYyxDQXlCeEM7SUF6QjBCLFdBQUEsY0FBYztRQU1yQyxJQUFpQixPQUFPLENBa0J2QjtRQWxCRCxXQUFpQixPQUFPO1lBQ1Asa0JBQVUsR0FBRyxRQUFRLENBQUM7WUFDdEIsb0JBQVksR0FBRyxVQUFVLENBQUM7WUFDMUIsdUJBQWUsR0FBRyxxQkFBcUIsQ0FBQztZQUN4QyxpQkFBUyxHQUFHLHFCQUFxQixDQUFDO1lBRS9DLFNBQWdCLFNBQVM7Z0JBQ3JCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBVSxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFGZSxpQkFBUyxZQUV4QixDQUFBO1lBQ1ksd0JBQWdCLEdBQUcseUJBQXlCLENBQUM7WUFDN0Msd0JBQWdCLEdBQUcseUJBQXlCLENBQUM7WUFDN0Msc0JBQWMsR0FBRyx5QkFBeUIsQ0FBQztZQUMzQyx3QkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztRQU05RCxDQUFDLEVBbEJnQixPQUFPLEdBQVAsc0JBQU8sS0FBUCxzQkFBTyxRQWtCdkI7SUFDTCxDQUFDLEVBekIwQixjQUFjLEdBQWQsK0JBQWMsS0FBZCwrQkFBYyxRQXlCeEM7QUFBRCxDQUFDLEVBekJTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUF5QnpCO0FDekJELElBQVUsZ0JBQWdCLENBOEJ6QjtBQTlCRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsY0FBYyxDQThCeEM7SUE5QjBCLFdBQUEsY0FBYztRQUNyQyxJQUFpQixXQUFXLENBNEIzQjtRQTVCRCxXQUFpQixXQUFXO1lBQ1gsbUJBQU8sR0FBRyxxQkFBcUIsQ0FBQztZQWdCN0M7Z0JBQ0ksUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixNQUFNO2FBQ1QsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNELFdBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDckMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQUEsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBNUJnQixXQUFXLEdBQVgsMEJBQVcsS0FBWCwwQkFBVyxRQTRCM0I7SUFDTCxDQUFDLEVBOUIwQixjQUFjLEdBQWQsK0JBQWMsS0FBZCwrQkFBYyxRQThCeEM7QUFBRCxDQUFDLEVBOUJTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUE4QnpCO0FHOUJELElBQVUsZ0JBQWdCLENBcUJ6QjtBQXJCRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsY0FBYyxDQXFCeEM7SUFyQjBCLFdBQUEsY0FBYztRQUNyQyxJQUFpQixrQkFBa0IsQ0FtQmxDO1FBbkJELFdBQWlCLGtCQUFrQjtZQUNsQiwwQkFBTyxHQUFHLDRCQUE0QixDQUFDO1lBVXBEO2dCQUNJLE1BQU07Z0JBQ04sUUFBUTthQUNYLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDRCxrQkFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDNUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLG1CQUFBLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQW5CZ0Isa0JBQWtCLEdBQWxCLGlDQUFrQixLQUFsQixpQ0FBa0IsUUFtQmxDO0lBQ0wsQ0FBQyxFQXJCMEIsY0FBYyxHQUFkLCtCQUFjLEtBQWQsK0JBQWMsUUFxQnhDO0FBQUQsQ0FBQyxFQXJCUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBcUJ6QjtBRXJCRCxJQUFVLGdCQUFnQixDQUl6QjtBQUpELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxjQUFjLENBSXhDO0lBSjBCLFdBQUEsY0FBYztRQUNyQztZQUFBO1lBRUEsQ0FBQztZQURVLHNCQUFVLEdBQUcscUJBQXFCLENBQUM7WUFDOUMsa0JBQUM7U0FBQSxBQUZELElBRUM7UUFGWSwwQkFBVyxjQUV2QixDQUFBO0lBQ0wsQ0FBQyxFQUowQixjQUFjLEdBQWQsK0JBQWMsS0FBZCwrQkFBYyxRQUl4QztBQUFELENBQUMsRUFKUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBSXpCO0FDSkQsSUFBVSxnQkFBZ0IsQ0F1Q3pCO0FBdkNELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxjQUFjLENBdUN4QztJQXZDMEIsV0FBQSxjQUFjO1FBV3JDO1lBQThCLDRCQUF3QjtZQUlsRCxrQkFBWSxNQUFjO2dCQUExQixZQUNJLGtCQUFNLE1BQU0sQ0FBQyxTQXFCaEI7Z0JBbkJHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFHO29CQUNqQixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFckIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUN4QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO29CQUN2QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUM7b0JBQzdCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7b0JBRTFCLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3dCQUNyQixVQUFVLEVBQUUsRUFBRTt3QkFDZCxhQUFhLEVBQUUsRUFBRTt3QkFDakIsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsV0FBVyxFQUFFLEVBQUU7d0JBQ2YsVUFBVSxFQUFFLEVBQUU7d0JBQ2QsaUJBQWlCLEVBQUUsRUFBRTt3QkFDckIsUUFBUSxFQUFFLEVBQUU7cUJBQ2YsQ0FBQyxDQUFDO2lCQUNOOztZQUNMLENBQUM7WUF6Qk0sZ0JBQU8sR0FBRyxxQkFBcUIsQ0FBQztZQTBCM0MsZUFBQztTQUFBLEFBM0JELENBQThCLFFBQVEsQ0FBQyxlQUFlLEdBMkJyRDtRQTNCWSx1QkFBUSxXQTJCcEIsQ0FBQTtJQUNMLENBQUMsRUF2QzBCLGNBQWMsR0FBZCwrQkFBYyxLQUFkLCtCQUFjLFFBdUN4QztBQUFELENBQUMsRUF2Q1MsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQXVDekI7QUV2Q0QsSUFBVSxnQkFBZ0IsQ0E0QnpCO0FBNUJELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxjQUFjLENBNEJ4QztJQTVCMEIsV0FBQSxjQUFjO1FBVXJDLElBQWlCLGlCQUFpQixDQWlCakM7UUFqQkQsV0FBaUIsaUJBQWlCO1lBQ2pCLDRCQUFVLEdBQUcsa0JBQWtCLENBQUM7WUFDaEMsOEJBQVksR0FBRyxlQUFlLENBQUM7WUFDL0IsaUNBQWUsR0FBRywrQkFBK0IsQ0FBQztZQUNsRCxrQ0FBZ0IsR0FBRyx5QkFBeUIsQ0FBQztZQUM3QyxrQ0FBZ0IsR0FBRyx5QkFBeUIsQ0FBQztZQUM3QyxnQ0FBYyxHQUFHLHlCQUF5QixDQUFDO1lBQzNDLGtDQUFnQixHQUFHLHlCQUF5QixDQUFDO1FBVTlELENBQUMsRUFqQmdCLGlCQUFpQixHQUFqQixnQ0FBaUIsS0FBakIsZ0NBQWlCLFFBaUJqQztJQUNMLENBQUMsRUE1QjBCLGNBQWMsR0FBZCwrQkFBYyxLQUFkLCtCQUFjLFFBNEJ4QztBQUFELENBQUMsRUE1QlMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQTRCekI7QUM1QkQsSUFBVSxnQkFBZ0IsQ0EyQnpCO0FBM0JELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxjQUFjLENBMkJ4QztJQTNCMEIsV0FBQSxjQUFjO1FBQ3JDLElBQWlCLHFCQUFxQixDQXlCckM7UUF6QkQsV0FBaUIscUJBQXFCO1lBQ3JCLDZCQUFPLEdBQUcsK0JBQStCLENBQUM7WUFjdkQ7Z0JBQ0ksUUFBUTtnQkFDUixNQUFNO2dCQUNOLHFCQUFxQjtnQkFDckIsb0JBQW9CO2FBQ3ZCLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDRCxxQkFBc0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDL0MsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLHNCQUFBLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQXpCZ0IscUJBQXFCLEdBQXJCLG9DQUFxQixLQUFyQixvQ0FBcUIsUUF5QnJDO0lBQ0wsQ0FBQyxFQTNCMEIsY0FBYyxHQUFkLCtCQUFjLEtBQWQsK0JBQWMsUUEyQnhDO0FBQUQsQ0FBQyxFQTNCUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBMkJ6QjtBSTNCRCxJQUFVLGdCQUFnQixDQXlCekI7QUF6QkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLGNBQWMsQ0F5QnhDO0lBekIwQixXQUFBLGNBQWM7UUFTckMsSUFBaUIsV0FBVyxDQWUzQjtRQWZELFdBQWlCLFdBQVc7WUFDWCxzQkFBVSxHQUFHLFlBQVksQ0FBQztZQUMxQiwyQkFBZSxHQUFHLHlCQUF5QixDQUFDO1lBQzVDLDRCQUFnQixHQUFHLHlCQUF5QixDQUFDO1lBQzdDLDRCQUFnQixHQUFHLHlCQUF5QixDQUFDO1lBQzdDLDBCQUFjLEdBQUcseUJBQXlCLENBQUM7WUFDM0MsNEJBQWdCLEdBQUcseUJBQXlCLENBQUM7UUFTOUQsQ0FBQyxFQWZnQixXQUFXLEdBQVgsMEJBQVcsS0FBWCwwQkFBVyxRQWUzQjtJQUNMLENBQUMsRUF6QjBCLGNBQWMsR0FBZCwrQkFBYyxLQUFkLCtCQUFjLFFBeUJ4QztBQUFELENBQUMsRUF6QlMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQXlCekI7QUN6QkQsSUFBVSxnQkFBZ0IsQ0FxQnpCO0FBckJELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxjQUFjLENBcUJ4QztJQXJCMEIsV0FBQSxjQUFjO1FBQ3JDLElBQWlCLGVBQWUsQ0FtQi9CO1FBbkJELFdBQWlCLGVBQWU7WUFDZix1QkFBTyxHQUFHLHlCQUF5QixDQUFDO1lBVWpEO2dCQUNJLFFBQVE7Z0JBQ1IsTUFBTTthQUNULENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDRCxlQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUN6QyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsZ0JBQUEsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBbkJnQixlQUFlLEdBQWYsOEJBQWUsS0FBZiw4QkFBZSxRQW1CL0I7SUFDTCxDQUFDLEVBckIwQixjQUFjLEdBQWQsK0JBQWMsS0FBZCwrQkFBYyxRQXFCeEM7QUFBRCxDQUFDLEVBckJTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFxQnpCO0FFckJELElBQVUsZ0JBQWdCLENBc0R6QjtBQXRERCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsY0FBYyxDQXNEeEM7SUF0RDBCLFdBQUEsY0FBYztRQW9CckMsSUFBaUIsT0FBTyxDQWlDdkI7UUFqQ0QsV0FBaUIsT0FBTztZQUNQLGtCQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ3RCLHdCQUFnQixHQUFHLFVBQVUsQ0FBQztZQUM5QixvQkFBWSxHQUFHLFVBQVUsQ0FBQztZQUMxQix1QkFBZSxHQUFHLHFCQUFxQixDQUFDO1lBQ3hDLGlCQUFTLEdBQUcscUJBQXFCLENBQUM7WUFFL0MsU0FBZ0IsU0FBUztnQkFDckIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFVLHFCQUFxQixDQUFDLENBQUM7WUFDdkQsQ0FBQztZQUZlLGlCQUFTLFlBRXhCLENBQUE7WUFDWSx3QkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztZQUM3Qyx3QkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztZQUM3QyxzQkFBYyxHQUFHLHlCQUF5QixDQUFDO1lBQzNDLHdCQUFnQixHQUFHLHlCQUF5QixDQUFDO1FBb0I5RCxDQUFDLEVBakNnQixPQUFPLEdBQVAsc0JBQU8sS0FBUCxzQkFBTyxRQWlDdkI7SUFDTCxDQUFDLEVBdEQwQixjQUFjLEdBQWQsK0JBQWMsS0FBZCwrQkFBYyxRQXNEeEM7QUFBRCxDQUFDLEVBdERTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFzRHpCO0FDdERELElBQVUsZ0JBQWdCLENBaUN6QjtBQWpDRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsY0FBYyxDQWlDeEM7SUFqQzBCLFdBQUEsY0FBYztRQUNyQyxJQUFpQixXQUFXLENBK0IzQjtRQS9CRCxXQUFpQixXQUFXO1lBQ1gsbUJBQU8sR0FBRyxxQkFBcUIsQ0FBQztZQWtCN0M7Z0JBQ0ksUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixVQUFVO2dCQUNWLE1BQU07YUFDVCxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ0QsV0FBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUNyQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBQSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUEvQmdCLFdBQVcsR0FBWCwwQkFBVyxLQUFYLDBCQUFXLFFBK0IzQjtJQUNMLENBQUMsRUFqQzBCLGNBQWMsR0FBZCwrQkFBYyxLQUFkLCtCQUFjLFFBaUN4QztBQUFELENBQUMsRUFqQ1MsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQWlDekI7QUNqQ0QsSUFBVSxnQkFBZ0IsQ0FVekI7QUFWRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsTUFBTSxDQVVoQztJQVYwQixXQUFBLE1BQU07UUFDN0IsSUFBWSxLQU9YO1FBUEQsV0FBWSxLQUFLO1lBQ2IsbUNBQVMsQ0FBQTtZQUNULHVDQUFXLENBQUE7WUFDWCx1Q0FBVyxDQUFBO1lBQ1gsbUNBQVMsQ0FBQTtZQUNULG1DQUFTLENBQUE7WUFDVCwyQ0FBYSxDQUFBO1FBQ2pCLENBQUMsRUFQVyxLQUFLLEdBQUwsWUFBSyxLQUFMLFlBQUssUUFPaEI7UUFDRCxRQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSwrQkFBK0IsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNoRyxDQUFDLEVBVjBCLE1BQU0sR0FBTix1QkFBTSxLQUFOLHVCQUFNLFFBVWhDO0FBQUQsQ0FBQyxFQVZTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFVekI7QUNURCxJQUFVLGdCQUFnQixDQUl6QjtBQUpELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxNQUFNLENBSWhDO0lBSjBCLFdBQUEsTUFBTTtRQUM3QjtZQUFBO1lBRUEsQ0FBQztZQURVLHNCQUFVLEdBQUcsYUFBYSxDQUFDO1lBQ3RDLGtCQUFDO1NBQUEsQUFGRCxJQUVDO1FBRlksa0JBQVcsY0FFdkIsQ0FBQTtJQUNMLENBQUMsRUFKMEIsTUFBTSxHQUFOLHVCQUFNLEtBQU4sdUJBQU0sUUFJaEM7QUFBRCxDQUFDLEVBSlMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUl6QjtBQ0xELElBQVUsZ0JBQWdCLENBd0N6QjtBQXhDRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsTUFBTSxDQXdDaEM7SUF4QzBCLFdBQUEsTUFBTTtRQVk3QjtZQUE4Qiw0QkFBd0I7WUFJbEQsa0JBQVksTUFBYztnQkFBMUIsWUFDSSxrQkFBTSxNQUFNLENBQUMsU0FxQmhCO2dCQW5CRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRztvQkFDakIsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRXJCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDeEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztvQkFDdEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztvQkFFdEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7d0JBQ3JCLEtBQUssRUFBRSxFQUFFO3dCQUNULE1BQU0sRUFBRSxFQUFFO3dCQUNWLFFBQVEsRUFBRSxFQUFFO3dCQUNaLGNBQWMsRUFBRSxFQUFFO3dCQUNsQixjQUFjLEVBQUUsRUFBRTt3QkFDbEIsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsUUFBUSxFQUFFLEVBQUU7d0JBQ1osUUFBUSxFQUFFLEVBQUU7cUJBQ2YsQ0FBQyxDQUFDO2lCQUNOOztZQUNMLENBQUM7WUF6Qk0sZ0JBQU8sR0FBRyxhQUFhLENBQUM7WUEwQm5DLGVBQUM7U0FBQSxBQTNCRCxDQUE4QixRQUFRLENBQUMsZUFBZSxHQTJCckQ7UUEzQlksZUFBUSxXQTJCcEIsQ0FBQTtJQUNMLENBQUMsRUF4QzBCLE1BQU0sR0FBTix1QkFBTSxLQUFOLHVCQUFNLFFBd0NoQztBQUFELENBQUMsRUF4Q1MsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQXdDekI7QUN4Q0QsSUFBVSxnQkFBZ0IsQ0FrQ3pCO0FBbENELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxNQUFNLENBa0NoQztJQWxDMEIsV0FBQSxNQUFNO1FBYTdCLElBQWlCLE9BQU8sQ0FvQnZCO1FBcEJELFdBQWlCLE9BQU87WUFDUCxrQkFBVSxHQUFHLElBQUksQ0FBQztZQUNsQixvQkFBWSxHQUFHLE1BQU0sQ0FBQztZQUN0Qix1QkFBZSxHQUFHLGFBQWEsQ0FBQztZQUNoQyx3QkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQztZQUM1Qyx3QkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQztZQUM1QyxzQkFBYyxHQUFHLHdCQUF3QixDQUFDO1lBQzFDLHdCQUFnQixHQUFHLHdCQUF3QixDQUFDO1FBYTdELENBQUMsRUFwQmdCLE9BQU8sR0FBUCxjQUFPLEtBQVAsY0FBTyxRQW9CdkI7SUFDTCxDQUFDLEVBbEMwQixNQUFNLEdBQU4sdUJBQU0sS0FBTix1QkFBTSxRQWtDaEM7QUFBRCxDQUFDLEVBbENTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFrQ3pCO0FDbENELElBQVUsZ0JBQWdCLENBOEJ6QjtBQTlCRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsTUFBTSxDQThCaEM7SUE5QjBCLFdBQUEsTUFBTTtRQUM3QixJQUFpQixXQUFXLENBNEIzQjtRQTVCRCxXQUFpQixXQUFXO1lBQ1gsbUJBQU8sR0FBRyxhQUFhLENBQUM7WUFnQnJDO2dCQUNJLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFVBQVU7Z0JBQ1YsTUFBTTthQUNULENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDRCxXQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ3JDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFBLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQTVCZ0IsV0FBVyxHQUFYLGtCQUFXLEtBQVgsa0JBQVcsUUE0QjNCO0lBQ0wsQ0FBQyxFQTlCMEIsTUFBTSxHQUFOLHVCQUFNLEtBQU4sdUJBQU0sUUE4QmhDO0FBQUQsQ0FBQyxFQTlCUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBOEJ6QjtBQzlCRCxJQUFVLGdCQUFnQixDQU16QjtBQU5ELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxNQUFNLENBTWhDO0lBTjBCLFdBQUEsTUFBTTtRQUM3QixJQUFZLE1BR1g7UUFIRCxXQUFZLE1BQU07WUFDZCwyQ0FBWSxDQUFBO1lBQ1osNkNBQWEsQ0FBQTtRQUNqQixDQUFDLEVBSFcsTUFBTSxHQUFOLGFBQU0sS0FBTixhQUFNLFFBR2pCO1FBQ0QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsZ0NBQWdDLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDcEcsQ0FBQyxFQU4wQixNQUFNLEdBQU4sdUJBQU0sS0FBTix1QkFBTSxRQU1oQztBQUFELENBQUMsRUFOUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBTXpCO0FDTEQsSUFBVSxnQkFBZ0IsQ0FJekI7QUFKRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsTUFBTSxDQUloQztJQUowQixXQUFBLE1BQU07UUFDN0I7WUFBQTtZQUVBLENBQUM7WUFEVSx5QkFBVSxHQUFHLGdCQUFnQixDQUFDO1lBQ3pDLHFCQUFDO1NBQUEsQUFGRCxJQUVDO1FBRlkscUJBQWMsaUJBRTFCLENBQUE7SUFDTCxDQUFDLEVBSjBCLE1BQU0sR0FBTix1QkFBTSxLQUFOLHVCQUFNLFFBSWhDO0FBQUQsQ0FBQyxFQUpTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFJekI7QUNMRCxJQUFVLGdCQUFnQixDQXdCekI7QUF4QkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLE1BQU0sQ0F3QmhDO0lBeEIwQixXQUFBLE1BQU07UUFLN0I7WUFBaUMsK0JBQXdCO1lBSXJELHFCQUFZLE1BQWM7Z0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBWWhCO2dCQVZHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFHO29CQUNwQixXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFeEIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUV4QixDQUFDLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTt3QkFDeEIsYUFBYSxFQUFFLEVBQUU7cUJBQ3BCLENBQUMsQ0FBQztpQkFDTjs7WUFDTCxDQUFDO1lBaEJNLG1CQUFPLEdBQUcsZ0JBQWdCLENBQUM7WUFpQnRDLGtCQUFDO1NBQUEsQUFsQkQsQ0FBaUMsUUFBUSxDQUFDLGVBQWUsR0FrQnhEO1FBbEJZLGtCQUFXLGNBa0J2QixDQUFBO0lBQ0wsQ0FBQyxFQXhCMEIsTUFBTSxHQUFOLHVCQUFNLEtBQU4sdUJBQU0sUUF3QmhDO0FBQUQsQ0FBQyxFQXhCUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBd0J6QjtBQ3hCRCxJQUFVLGdCQUFnQixDQXlCekI7QUF6QkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLE1BQU0sQ0F5QmhDO0lBekIwQixXQUFBLE1BQU07UUFNN0IsSUFBaUIsVUFBVSxDQWtCMUI7UUFsQkQsV0FBaUIsVUFBVTtZQUNWLHFCQUFVLEdBQUcsV0FBVyxDQUFDO1lBQ3pCLHVCQUFZLEdBQUcsYUFBYSxDQUFDO1lBQzdCLDBCQUFlLEdBQUcsZ0JBQWdCLENBQUM7WUFDbkMsb0JBQVMsR0FBRyxnQkFBZ0IsQ0FBQztZQUUxQyxTQUFnQixTQUFTO2dCQUNyQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQWEsZ0JBQWdCLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBRmUsb0JBQVMsWUFFeEIsQ0FBQTtZQUNZLDJCQUFnQixHQUFHLGdCQUFnQixDQUFDO1lBQ3BDLDJCQUFnQixHQUFHLGdCQUFnQixDQUFDO1lBQ3BDLHlCQUFjLEdBQUcsY0FBYyxDQUFDO1lBQ2hDLDJCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBTXJELENBQUMsRUFsQmdCLFVBQVUsR0FBVixpQkFBVSxLQUFWLGlCQUFVLFFBa0IxQjtJQUNMLENBQUMsRUF6QjBCLE1BQU0sR0FBTix1QkFBTSxLQUFOLHVCQUFNLFFBeUJoQztBQUFELENBQUMsRUF6QlMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQXlCekI7QUN6QkQsSUFBVSxnQkFBZ0IsQ0E4QnpCO0FBOUJELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxNQUFNLENBOEJoQztJQTlCMEIsV0FBQSxNQUFNO1FBQzdCLElBQWlCLGNBQWMsQ0E0QjlCO1FBNUJELFdBQWlCLGNBQWM7WUFDZCxzQkFBTyxHQUFHLGdCQUFnQixDQUFDO1lBZ0J4QztnQkFDSSxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixVQUFVO2dCQUNWLE1BQU07YUFDVCxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ0QsY0FBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUN4QyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBQSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUE1QmdCLGNBQWMsR0FBZCxxQkFBYyxLQUFkLHFCQUFjLFFBNEI5QjtJQUNMLENBQUMsRUE5QjBCLE1BQU0sR0FBTix1QkFBTSxLQUFOLHVCQUFNLFFBOEJoQztBQUFELENBQUMsRUE5QlMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQThCekI7QUM3QkQsSUFBVSxnQkFBZ0IsQ0FJekI7QUFKRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsTUFBTSxDQUloQztJQUowQixXQUFBLE1BQU07UUFDN0I7WUFBQTtZQUVBLENBQUM7WUFEVSx1QkFBVSxHQUFHLGNBQWMsQ0FBQztZQUN2QyxtQkFBQztTQUFBLEFBRkQsSUFFQztRQUZZLG1CQUFZLGVBRXhCLENBQUE7SUFDTCxDQUFDLEVBSjBCLE1BQU0sR0FBTix1QkFBTSxLQUFOLHVCQUFNLFFBSWhDO0FBQUQsQ0FBQyxFQUpTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFJekI7QUNMRCxJQUFVLGdCQUFnQixDQThCekI7QUE5QkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLE1BQU0sQ0E4QmhDO0lBOUIwQixXQUFBLE1BQU07UUFPN0I7WUFBK0IsNkJBQXdCO1lBSW5ELG1CQUFZLE1BQWM7Z0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBZ0JoQjtnQkFkRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRztvQkFDbEIsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRXRCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDeEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDeEIsSUFBSSxFQUFFLEdBQUcsT0FBQSxpQkFBaUIsQ0FBQztvQkFFM0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7d0JBQ3RCLFdBQVcsRUFBRSxFQUFFO3dCQUNmLFdBQVcsRUFBRSxFQUFFO3dCQUNmLGFBQWEsRUFBRSxFQUFFO3FCQUNwQixDQUFDLENBQUM7aUJBQ047O1lBQ0wsQ0FBQztZQXBCTSxpQkFBTyxHQUFHLGNBQWMsQ0FBQztZQXFCcEMsZ0JBQUM7U0FBQSxBQXRCRCxDQUErQixRQUFRLENBQUMsZUFBZSxHQXNCdEQ7UUF0QlksZ0JBQVMsWUFzQnJCLENBQUE7SUFDTCxDQUFDLEVBOUIwQixNQUFNLEdBQU4sdUJBQU0sS0FBTix1QkFBTSxRQThCaEM7QUFBRCxDQUFDLEVBOUJTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUE4QnpCO0FDOUJELElBQVUsZ0JBQWdCLENBK0J6QjtBQS9CRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsTUFBTSxDQStCaEM7SUEvQjBCLFdBQUEsTUFBTTtRQVM3QixJQUFpQixRQUFRLENBcUJ4QjtRQXJCRCxXQUFpQixRQUFRO1lBQ1IsbUJBQVUsR0FBRyxTQUFTLENBQUM7WUFDdkIscUJBQVksR0FBRyxXQUFXLENBQUM7WUFDM0Isd0JBQWUsR0FBRyxjQUFjLENBQUM7WUFDakMsa0JBQVMsR0FBRyxjQUFjLENBQUM7WUFFeEMsU0FBZ0IsU0FBUztnQkFDckIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFXLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELENBQUM7WUFGZSxrQkFBUyxZQUV4QixDQUFBO1lBQ1kseUJBQWdCLEdBQUcsY0FBYyxDQUFDO1lBQ2xDLHlCQUFnQixHQUFHLGNBQWMsQ0FBQztZQUNsQyx1QkFBYyxHQUFHLFlBQVksQ0FBQztZQUM5Qix5QkFBZ0IsR0FBRyxjQUFjLENBQUM7UUFTbkQsQ0FBQyxFQXJCZ0IsUUFBUSxHQUFSLGVBQVEsS0FBUixlQUFRLFFBcUJ4QjtJQUNMLENBQUMsRUEvQjBCLE1BQU0sR0FBTix1QkFBTSxLQUFOLHVCQUFNLFFBK0JoQztBQUFELENBQUMsRUEvQlMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQStCekI7QUMvQkQsSUFBVSxnQkFBZ0IsQ0E4QnpCO0FBOUJELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxNQUFNLENBOEJoQztJQTlCMEIsV0FBQSxNQUFNO1FBQzdCLElBQWlCLFlBQVksQ0E0QjVCO1FBNUJELFdBQWlCLFlBQVk7WUFDWixvQkFBTyxHQUFHLGNBQWMsQ0FBQztZQWdCdEM7Z0JBQ0ksUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixNQUFNO2FBQ1QsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNELFlBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLGFBQUEsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBNUJnQixZQUFZLEdBQVosbUJBQVksS0FBWixtQkFBWSxRQTRCNUI7SUFDTCxDQUFDLEVBOUIwQixNQUFNLEdBQU4sdUJBQU0sS0FBTix1QkFBTSxRQThCaEM7QUFBRCxDQUFDLEVBOUJTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUE4QnpCO0FDN0JELElBQVUsZ0JBQWdCLENBSXpCO0FBSkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLE1BQU0sQ0FJaEM7SUFKMEIsV0FBQSxNQUFNO1FBQzdCO1lBQUE7WUFFQSxDQUFDO1lBRFUsdUJBQVUsR0FBRyxjQUFjLENBQUM7WUFDdkMsbUJBQUM7U0FBQSxBQUZELElBRUM7UUFGWSxtQkFBWSxlQUV4QixDQUFBO0lBQ0wsQ0FBQyxFQUowQixNQUFNLEdBQU4sdUJBQU0sS0FBTix1QkFBTSxRQUloQztBQUFELENBQUMsRUFKUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBSXpCO0FDTEQsSUFBVSxnQkFBZ0IsQ0ErQ3pCO0FBL0NELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxNQUFNLENBK0NoQztJQS9DMEIsV0FBQSxNQUFNO1FBZTdCO1lBQStCLDZCQUF3QjtZQUluRCxtQkFBWSxNQUFjO2dCQUExQixZQUNJLGtCQUFNLE1BQU0sQ0FBQyxTQXlCaEI7Z0JBdkJHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFHO29CQUNsQixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFdEIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUN4QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO29CQUN0QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO29CQUN0QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUV4QixDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTt3QkFDdEIsS0FBSyxFQUFFLEVBQUU7d0JBQ1QsTUFBTSxFQUFFLEVBQUU7d0JBQ1YsUUFBUSxFQUFFLEVBQUU7d0JBQ1osY0FBYyxFQUFFLEVBQUU7d0JBQ2xCLGNBQWMsRUFBRSxFQUFFO3dCQUNsQixPQUFPLEVBQUUsRUFBRTt3QkFDWCxNQUFNLEVBQUUsRUFBRTt3QkFDVixRQUFRLEVBQUUsRUFBRTt3QkFDWixVQUFVLEVBQUUsRUFBRTt3QkFDZCxTQUFTLEVBQUUsRUFBRTt3QkFDYixTQUFTLEVBQUUsRUFBRTtxQkFDaEIsQ0FBQyxDQUFDO2lCQUNOOztZQUNMLENBQUM7WUE3Qk0saUJBQU8sR0FBRyxjQUFjLENBQUM7WUE4QnBDLGdCQUFDO1NBQUEsQUEvQkQsQ0FBK0IsUUFBUSxDQUFDLGVBQWUsR0ErQnREO1FBL0JZLGdCQUFTLFlBK0JyQixDQUFBO0lBQ0wsQ0FBQyxFQS9DMEIsTUFBTSxHQUFOLHVCQUFNLEtBQU4sdUJBQU0sUUErQ2hDO0FBQUQsQ0FBQyxFQS9DUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBK0N6QjtBQy9DRCxJQUFVLGdCQUFnQixDQWlEekI7QUFqREQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLE1BQU0sQ0FpRGhDO0lBakQwQixXQUFBLE1BQU07UUFrQjdCLElBQWlCLFFBQVEsQ0E4QnhCO1FBOUJELFdBQWlCLFFBQVE7WUFDUixtQkFBVSxHQUFHLElBQUksQ0FBQztZQUNsQixxQkFBWSxHQUFHLE1BQU0sQ0FBQztZQUN0Qix3QkFBZSxHQUFHLGNBQWMsQ0FBQztZQUNqQyxrQkFBUyxHQUFHLGNBQWMsQ0FBQztZQUV4QyxTQUFnQixTQUFTO2dCQUNyQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQVcsY0FBYyxDQUFDLENBQUM7WUFDakQsQ0FBQztZQUZlLGtCQUFTLFlBRXhCLENBQUE7WUFDWSx5QkFBZ0IsR0FBRyxlQUFlLENBQUM7WUFDbkMseUJBQWdCLEdBQUcsZUFBZSxDQUFDO1lBQ25DLHVCQUFjLEdBQUcsZUFBZSxDQUFDO1lBQ2pDLHlCQUFnQixHQUFHLGVBQWUsQ0FBQztRQWtCcEQsQ0FBQyxFQTlCZ0IsUUFBUSxHQUFSLGVBQVEsS0FBUixlQUFRLFFBOEJ4QjtJQUNMLENBQUMsRUFqRDBCLE1BQU0sR0FBTix1QkFBTSxLQUFOLHVCQUFNLFFBaURoQztBQUFELENBQUMsRUFqRFMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQWlEekI7QUNqREQsSUFBVSxnQkFBZ0IsQ0E4QnpCO0FBOUJELFdBQVUsZ0JBQWdCO0lBQUMsSUFBQSxNQUFNLENBOEJoQztJQTlCMEIsV0FBQSxNQUFNO1FBQzdCLElBQWlCLFlBQVksQ0E0QjVCO1FBNUJELFdBQWlCLFlBQVk7WUFDWixvQkFBTyxHQUFHLGNBQWMsQ0FBQztZQWdCdEM7Z0JBQ0ksUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixNQUFNO2FBQ1QsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNELFlBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLGFBQUEsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBNUJnQixZQUFZLEdBQVosbUJBQVksS0FBWixtQkFBWSxRQTRCNUI7SUFDTCxDQUFDLEVBOUIwQixNQUFNLEdBQU4sdUJBQU0sS0FBTix1QkFBTSxRQThCaEM7QUFBRCxDQUFDLEVBOUJTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUE4QnpCO0FDOUJELElBQVUsZ0JBQWdCLENBTXpCO0FBTkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLE1BQU0sQ0FNaEM7SUFOMEIsV0FBQSxNQUFNO1FBQzdCLElBQVksTUFHWDtRQUhELFdBQVksTUFBTTtZQUNkLHFDQUFTLENBQUE7WUFDVCxtQ0FBUSxDQUFBO1FBQ1osQ0FBQyxFQUhXLE1BQU0sR0FBTixhQUFNLEtBQU4sYUFBTSxRQUdqQjtRQUNELFFBQVEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGdDQUFnQyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3BHLENBQUMsRUFOMEIsTUFBTSxHQUFOLHVCQUFNLEtBQU4sdUJBQU0sUUFNaEM7QUFBRCxDQUFDLEVBTlMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQU16QjtBQ05ELElBQVUsZ0JBQWdCLENBTXpCO0FBTkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLE1BQU0sQ0FNaEM7SUFOMEIsV0FBQSxNQUFNO1FBQzdCLElBQVksTUFHWDtRQUhELFdBQVksTUFBTTtZQUNkLDJDQUFZLENBQUE7WUFDWiw2Q0FBYSxDQUFBO1FBQ2pCLENBQUMsRUFIVyxNQUFNLEdBQU4sYUFBTSxLQUFOLGFBQU0sUUFHakI7UUFDRCxRQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxnQ0FBZ0MsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNuRyxDQUFDLEVBTjBCLE1BQU0sR0FBTix1QkFBTSxLQUFOLHVCQUFNLFFBTWhDO0FBQUQsQ0FBQyxFQU5TLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFNekI7QUNORCxJQUFVLGdCQUFnQixDQTRCekI7QUE1QkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLFVBQVUsQ0E0QnBDO0lBNUIwQixXQUFBLFVBQVU7UUFPakM7WUFBd0Msc0NBQXdCO1lBSTVELDRCQUFZLE1BQWM7Z0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBY2hCO2dCQVpHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUc7b0JBQzNCLGtCQUFrQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRS9CLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztvQkFFMUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRTt3QkFDL0IsYUFBYSxFQUFFLEVBQUU7d0JBQ2pCLGFBQWEsRUFBRSxFQUFFO3dCQUNqQixpQkFBaUIsRUFBRSxFQUFFO3FCQUN4QixDQUFDLENBQUM7aUJBQ047O1lBQ0wsQ0FBQztZQWxCTSwwQkFBTyxHQUFHLDJCQUEyQixDQUFDO1lBbUJqRCx5QkFBQztTQUFBLEFBcEJELENBQXdDLFFBQVEsQ0FBQyxlQUFlLEdBb0IvRDtRQXBCWSw2QkFBa0IscUJBb0I5QixDQUFBO0lBQ0wsQ0FBQyxFQTVCMEIsVUFBVSxHQUFWLDJCQUFVLEtBQVYsMkJBQVUsUUE0QnBDO0FBQUQsQ0FBQyxFQTVCUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBNEJ6QjtBRTVCRCxJQUFVLGdCQUFnQixDQXdCekI7QUF4QkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLFVBQVUsQ0F3QnBDO0lBeEIwQixXQUFBLFVBQVU7UUFLakM7WUFBd0Msc0NBQXdCO1lBSTVELDRCQUFZLE1BQWM7Z0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBWWhCO2dCQVZHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUc7b0JBQzNCLGtCQUFrQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRS9CLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO29CQUU5QixDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFO3dCQUMvQixPQUFPLEVBQUUsRUFBRTtxQkFDZCxDQUFDLENBQUM7aUJBQ047O1lBQ0wsQ0FBQztZQWhCTSwwQkFBTyxHQUFHLDJCQUEyQixDQUFDO1lBaUJqRCx5QkFBQztTQUFBLEFBbEJELENBQXdDLFFBQVEsQ0FBQyxlQUFlLEdBa0IvRDtRQWxCWSw2QkFBa0IscUJBa0I5QixDQUFBO0lBQ0wsQ0FBQyxFQXhCMEIsVUFBVSxHQUFWLDJCQUFVLEtBQVYsMkJBQVUsUUF3QnBDO0FBQUQsQ0FBQyxFQXhCUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBd0J6QjtBRXhCRCxJQUFVLGdCQUFnQixDQTJCekI7QUEzQkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLFVBQVUsQ0EyQnBDO0lBM0IwQixXQUFBLFVBQVU7UUFNakM7WUFBK0IsNkJBQXdCO1lBSW5ELG1CQUFZLE1BQWM7Z0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBY2hCO2dCQVpHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFHO29CQUNsQixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFdEIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUN4QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO29CQUUxQixDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTt3QkFDdEIsVUFBVSxFQUFFLEVBQUU7d0JBQ2QsVUFBVSxFQUFFLEVBQUU7cUJBQ2pCLENBQUMsQ0FBQztpQkFDTjs7WUFDTCxDQUFDO1lBbEJNLGlCQUFPLEdBQUcsa0JBQWtCLENBQUM7WUFtQnhDLGdCQUFDO1NBQUEsQUFwQkQsQ0FBK0IsUUFBUSxDQUFDLGVBQWUsR0FvQnREO1FBcEJZLG9CQUFTLFlBb0JyQixDQUFBO0lBQ0wsQ0FBQyxFQTNCMEIsVUFBVSxHQUFWLDJCQUFVLEtBQVYsMkJBQVUsUUEyQnBDO0FBQUQsQ0FBQyxFQTNCUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBMkJ6QjtBRTNCRCxJQUFVLGdCQUFnQixDQTBCekI7QUExQkQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLFVBQVUsQ0EwQnBDO0lBMUIwQixXQUFBLFVBQVU7UUFNakM7WUFBdUMscUNBQXdCO1lBSTNELDJCQUFZLE1BQWM7Z0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBYWhCO2dCQVhHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUc7b0JBQzFCLGlCQUFpQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRTlCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztvQkFFMUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRTt3QkFDOUIsYUFBYSxFQUFFLEVBQUU7d0JBQ2pCLGlCQUFpQixFQUFFLEVBQUU7cUJBQ3hCLENBQUMsQ0FBQztpQkFDTjs7WUFDTCxDQUFDO1lBakJNLHlCQUFPLEdBQUcsMEJBQTBCLENBQUM7WUFrQmhELHdCQUFDO1NBQUEsQUFuQkQsQ0FBdUMsUUFBUSxDQUFDLGVBQWUsR0FtQjlEO1FBbkJZLDRCQUFpQixvQkFtQjdCLENBQUE7SUFDTCxDQUFDLEVBMUIwQixVQUFVLEdBQVYsMkJBQVUsS0FBViwyQkFBVSxRQTBCcEM7QUFBRCxDQUFDLEVBMUJTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUEwQnpCO0FFMUJELElBQVUsZ0JBQWdCLENBa0N6QjtBQWxDRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsVUFBVSxDQWtDcEM7SUFsQzBCLFdBQUEsVUFBVTtRQVNqQztZQUFnQyw4QkFBd0I7WUFJcEQsb0JBQVksTUFBYztnQkFBMUIsWUFDSSxrQkFBTSxNQUFNLENBQUMsU0FrQmhCO2dCQWhCRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRztvQkFDbkIsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRXZCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDeEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO29CQUM5QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO29CQUUxQixDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTt3QkFDdkIsYUFBYSxFQUFFLEVBQUU7d0JBQ2pCLE9BQU8sRUFBRSxFQUFFO3dCQUNYLGNBQWMsRUFBRSxFQUFFO3dCQUNsQixVQUFVLEVBQUUsRUFBRTt3QkFDZCxpQkFBaUIsRUFBRSxFQUFFO3FCQUN4QixDQUFDLENBQUM7aUJBQ047O1lBQ0wsQ0FBQztZQXRCTSxrQkFBTyxHQUFHLG1CQUFtQixDQUFDO1lBdUJ6QyxpQkFBQztTQUFBLEFBeEJELENBQWdDLFFBQVEsQ0FBQyxlQUFlLEdBd0J2RDtRQXhCWSxxQkFBVSxhQXdCdEIsQ0FBQTtJQUNMLENBQUMsRUFsQzBCLFVBQVUsR0FBViwyQkFBVSxLQUFWLDJCQUFVLFFBa0NwQztBQUFELENBQUMsRUFsQ1MsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQWtDekI7QUVqQ0QsSUFBVSxnQkFBZ0IsQ0FJekI7QUFKRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsUUFBUSxDQUlsQztJQUowQixXQUFBLFFBQVE7UUFDL0I7WUFBQTtZQUVBLENBQUM7WUFEVSx1QkFBVSxHQUFHLGdCQUFnQixDQUFDO1lBQ3pDLG1CQUFDO1NBQUEsQUFGRCxJQUVDO1FBRlkscUJBQVksZUFFeEIsQ0FBQTtJQUNMLENBQUMsRUFKMEIsUUFBUSxHQUFSLHlCQUFRLEtBQVIseUJBQVEsUUFJbEM7QUFBRCxDQUFDLEVBSlMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUl6QjtBQ0xELElBQVUsZ0JBQWdCLENBc0N6QjtBQXRDRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsUUFBUSxDQXNDbEM7SUF0QzBCLFdBQUEsUUFBUTtRQVUvQjtZQUErQiw2QkFBd0I7WUFJbkQsbUJBQVksTUFBYztnQkFBMUIsWUFDSSxrQkFBTSxNQUFNLENBQUMsU0FxQmhCO2dCQW5CRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRztvQkFDbEIsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRXRCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztvQkFDdEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztvQkFDdEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDeEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztvQkFDekIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFFeEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7d0JBQ3RCLFNBQVMsRUFBRSxFQUFFO3dCQUNiLE1BQU0sRUFBRSxFQUFFO3dCQUNWLE9BQU8sRUFBRSxFQUFFO3dCQUNYLFFBQVEsRUFBRSxFQUFFO3dCQUNaLFNBQVMsRUFBRSxFQUFFO3dCQUNiLFFBQVEsRUFBRSxFQUFFO3FCQUNmLENBQUMsQ0FBQztpQkFDTjs7WUFDTCxDQUFDO1lBekJNLGlCQUFPLEdBQUcsZ0JBQWdCLENBQUM7WUEwQnRDLGdCQUFDO1NBQUEsQUEzQkQsQ0FBK0IsUUFBUSxDQUFDLGVBQWUsR0EyQnREO1FBM0JZLGtCQUFTLFlBMkJyQixDQUFBO0lBQ0wsQ0FBQyxFQXRDMEIsUUFBUSxHQUFSLHlCQUFRLEtBQVIseUJBQVEsUUFzQ2xDO0FBQUQsQ0FBQyxFQXRDUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBc0N6QjtBQ3RDRCxJQUFVLGdCQUFnQixDQW9FekI7QUFwRUQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLFFBQVEsQ0FvRWxDO0lBcEUwQixXQUFBLFFBQVE7UUE4Qi9CLElBQWlCLFFBQVEsQ0FxQ3hCO1FBckNELFdBQWlCLFFBQVE7WUFDUixtQkFBVSxHQUFHLElBQUksQ0FBQztZQUNsQixxQkFBWSxHQUFHLE1BQU0sQ0FBQztZQUN0Qix3QkFBZSxHQUFHLGdCQUFnQixDQUFDO1lBQ25DLHlCQUFnQixHQUFHLGdCQUFnQixDQUFDO1lBQ3BDLHlCQUFnQixHQUFHLGdCQUFnQixDQUFDO1lBQ3BDLHVCQUFjLEdBQUcsY0FBYyxDQUFDO1lBQ2hDLHlCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBOEJyRCxDQUFDLEVBckNnQixRQUFRLEdBQVIsaUJBQVEsS0FBUixpQkFBUSxRQXFDeEI7SUFDTCxDQUFDLEVBcEUwQixRQUFRLEdBQVIseUJBQVEsS0FBUix5QkFBUSxRQW9FbEM7QUFBRCxDQUFDLEVBcEVTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFvRXpCO0FDcEVELElBQVUsZ0JBQWdCLENBOEJ6QjtBQTlCRCxXQUFVLGdCQUFnQjtJQUFDLElBQUEsUUFBUSxDQThCbEM7SUE5QjBCLFdBQUEsUUFBUTtRQUMvQixJQUFpQixZQUFZLENBNEI1QjtRQTVCRCxXQUFpQixZQUFZO1lBQ1osb0JBQU8sR0FBRyxnQkFBZ0IsQ0FBQztZQWdCeEM7Z0JBQ0ksUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixNQUFNO2FBQ1QsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNELFlBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLGFBQUEsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBNUJnQixZQUFZLEdBQVoscUJBQVksS0FBWixxQkFBWSxRQTRCNUI7SUFDTCxDQUFDLEVBOUIwQixRQUFRLEdBQVIseUJBQVEsS0FBUix5QkFBUSxRQThCbEM7QUFBRCxDQUFDLEVBOUJTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUE4QnpCO0FDOUJELElBQVUsZ0JBQWdCLENBT3pCO0FBUEQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLFFBQVEsQ0FPbEM7SUFQMEIsV0FBQSxRQUFRO1FBQy9CLElBQVksUUFJWDtRQUpELFdBQVksUUFBUTtZQUNoQix5Q0FBUyxDQUFBO1lBQ1QseUNBQVMsQ0FBQTtZQUNULHVDQUFRLENBQUE7UUFDWixDQUFDLEVBSlcsUUFBUSxHQUFSLGlCQUFRLEtBQVIsaUJBQVEsUUFJbkI7UUFDRCxRQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxvQ0FBb0MsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN6RyxDQUFDLEVBUDBCLFFBQVEsR0FBUix5QkFBUSxLQUFSLHlCQUFRLFFBT2xDO0FBQUQsQ0FBQyxFQVBTLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFPekI7QUVQRCxJQUFVLGdCQUFnQixDQWdUekI7QUFoVEQsV0FBVSxnQkFBZ0I7SUFBQyxJQUFBLEtBQUssQ0FnVC9CO0lBaFQwQixXQUFBLEtBQUs7UUErUzVCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsV0FBVyxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLHlCQUF5QixFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxFQUFDLFlBQVksRUFBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsbUJBQW1CLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFB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bEM7QUFBRCxDQUFDLEVBZlMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQWV6QiIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlRm9ybSB7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIExhbmd1YWdlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFMYW5ndWFnZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIExhbmd1YWdlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTGFuZ3VhZ2VGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VSb3cge1xyXG4gICAgICAgIElkPzogbnVtYmVyO1xyXG4gICAgICAgIExhbmd1YWdlSWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFuZ3VhZ2VOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0xhbmd1YWdlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8TGFuZ3VhZ2VSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPExhbmd1YWdlUm93PignQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VJZCA9IFwiTGFuZ3VhZ2VJZFwiLFxyXG4gICAgICAgICAgICBMYW5ndWFnZU5hbWUgPSBcIkxhbmd1YWdlTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PExhbmd1YWdlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pkxhbmd1YWdlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUGVybWlzc2lvbktleXMge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTZWN1cml0eSA9IFwiQWRtaW5pc3RyYXRpb246U2VjdXJpdHlcIjtcclxuICAgICAgICBleHBvcnQgY29uc3QgVHJhbnNsYXRpb24gPSBcIkFkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uXCI7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVGb3JtIHtcclxuICAgICAgICBSb2xlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUm9sZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFJvbGVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSb2xlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdSb2xlTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIFJvbGVQZXJtaXNzaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgUm9sZVJvbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBSb2xlUGVybWlzc2lvbklkID0gXCJSb2xlUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgUm9sZVJvbGVOYW1lID0gXCJSb2xlUm9sZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBSb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlJvbGVQZXJtaXNzaW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFBlcm1pc3Npb25zPzogc3RyaW5nW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVJvdyB7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUm9sZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1JvbGVOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8Um9sZVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Um9sZVJvdz4oJ0FkbWluaXN0cmF0aW9uLlJvbGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBSb2xlTmFtZSA9IFwiUm9sZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Sb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJvbGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSb2xlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFJvbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Um9sZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Um9sZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uSXRlbSB7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFNvdXJjZVRleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0VGV4dD86IHN0cmluZztcclxuICAgICAgICBDdXN0b21UZXh0Pzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVxdWVzdCB7XHJcbiAgICAgICAgU291cmNlTGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFRyYW5zbGF0aW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFRyYW5zbGF0aW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFRyYW5zbGF0aW9uSXRlbT4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbi9MaXN0XCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vVXBkYXRlXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0xpc3QnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZSdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlRyYW5zbGF0aW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRhcmdldExhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVHJhbnNsYXRpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJGb3JtIHtcclxuICAgICAgICBVc2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERpc3BsYXlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsRWRpdG9yO1xyXG4gICAgICAgIFVzZXJJbWFnZTogU2VyZW5pdHkuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkQ29uZmlybTogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgU291cmNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFVc2VyRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgVXNlckZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFVzZXJGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJJbWFnZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZENvbmZpcm0nLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnU291cmNlJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgVXNlclBlcm1pc3Npb25JZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybWlzc2lvbktleT86IHN0cmluZztcclxuICAgICAgICBHcmFudGVkPzogYm9vbGVhbjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVc2VyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvbklkID0gXCJVc2VyUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgR3JhbnRlZCA9IFwiR3JhbnRlZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlciA9IFwiVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBVc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxVc2VyUGVybWlzc2lvblJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0Um9sZVBlcm1pc3Npb25zKHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPHN0cmluZz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0UGVybWlzc2lvbktleXMocmVxdWVzdDogU2VyZW5pdHkuU2VydmljZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPHN0cmluZz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBMaXN0Um9sZVBlcm1pc3Npb25zID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0Um9sZVBlcm1pc3Npb25zXCIsXHJcbiAgICAgICAgICAgIExpc3RQZXJtaXNzaW9uS2V5cyA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFBlcm1pc3Npb25LZXlzXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCcsIFxyXG4gICAgICAgICAgICAnTGlzdFJvbGVQZXJtaXNzaW9ucycsIFxyXG4gICAgICAgICAgICAnTGlzdFBlcm1pc3Npb25LZXlzJ1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VXNlclBlcm1pc3Npb25TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiBVc2VyUGVybWlzc2lvblJvd1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlTGlzdFJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlc3BvbnNlPG51bWJlcj4ge1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBVc2VyUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUm9sZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJSb2xlSWQgPSBcIlVzZXJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclJvbGVVcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclJvbGVMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBVc2VyUm9sZUxpc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJSb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVVcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBSb2xlcz86IG51bWJlcltdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb3cge1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRIYXNoPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkU2FsdD86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBVc2VySW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZT86IHN0cmluZztcclxuICAgICAgICBJc0FjdGl2ZT86IG51bWJlcjtcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZENvbmZpcm0/OiBzdHJpbmc7XHJcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIEluc2VydERhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VySWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpc0FjdGl2ZVByb3BlcnR5ID0gJ0lzQWN0aXZlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1VzZXJuYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8VXNlclJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8VXNlclJvdz4oJ0FkbWluaXN0cmF0aW9uLlVzZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgU291cmNlID0gXCJTb3VyY2VcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRIYXNoID0gXCJQYXNzd29yZEhhc2hcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRTYWx0ID0gXCJQYXNzd29yZFNhbHRcIixcclxuICAgICAgICAgICAgRGlzcGxheU5hbWUgPSBcIkRpc3BsYXlOYW1lXCIsXHJcbiAgICAgICAgICAgIEVtYWlsID0gXCJFbWFpbFwiLFxyXG4gICAgICAgICAgICBVc2VySW1hZ2UgPSBcIlVzZXJJbWFnZVwiLFxyXG4gICAgICAgICAgICBMYXN0RGlyZWN0b3J5VXBkYXRlID0gXCJMYXN0RGlyZWN0b3J5VXBkYXRlXCIsXHJcbiAgICAgICAgICAgIElzQWN0aXZlID0gXCJJc0FjdGl2ZVwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZCA9IFwiUGFzc3dvcmRcIixcclxuICAgICAgICAgICAgUGFzc3dvcmRDb25maXJtID0gXCJQYXNzd29yZENvbmZpcm1cIixcclxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcclxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVc2VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VXNlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVbmRlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5VbmRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuVW5kZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFVzZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9EZWxldGVcIixcclxuICAgICAgICAgICAgVW5kZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVW5kZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1VuZGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWFzdGVyIHtcbiAgICBleHBvcnQgZW51bSBBZ2FtYSB7XG4gICAgICAgIElzbGFtID0gMSxcbiAgICAgICAgS3Jpc3RlbiA9IDIsXG4gICAgICAgIEthdG9saWsgPSAzLFxuICAgICAgICBIaW5kdSA9IDQsXG4gICAgICAgIEJ1ZGhhID0gNSxcbiAgICAgICAgS2hvbmdodWN1ID0gNlxuICAgIH1cbiAgICBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRW51bVR5cGUoQWdhbWEsICdQcmVzZW5zaVNlcmVuaXR5Lk1hc3Rlci5BZ2FtYScsICdTaXN3YS5BZ2FtYScpO1xufVxuIiwiXHJcbm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1hc3RlciB7XHJcbiAgICBleHBvcnQgY2xhc3MgR3VydUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ01hc3Rlci5HdXJ1JztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1hc3RlciB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBHdXJ1Rm9ybSB7XG4gICAgICAgIE5pcDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBOYW1hOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFRlbXBhdDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBUYW5nZ2FsbGFoaXI6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIEplbmlzS2VsYW1pbjogU2VyZW5pdHkuRW51bUVkaXRvcjtcbiAgICAgICAgQWdhbWE6IFNlcmVuaXR5LkVudW1FZGl0b3I7XG4gICAgICAgIEFsYW1hdDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBTdGF0dXM6IFNlcmVuaXR5LkVudW1FZGl0b3I7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIEd1cnVGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWFzdGVyLkd1cnUnO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIUd1cnVGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgR3VydUZvcm0uaW5pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkVudW1FZGl0b3I7XG5cbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShHdXJ1Rm9ybSwgW1xuICAgICAgICAgICAgICAgICAgICAnTmlwJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdOYW1hJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdUZW1wYXQnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1RhbmdnYWxsYWhpcicsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnSmVuaXNLZWxhbWluJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdBZ2FtYScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnQWxhbWF0JywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdTdGF0dXMnLCB3MlxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWFzdGVyIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIEd1cnVSb3cge1xuICAgICAgICBJZD86IG51bWJlcjtcbiAgICAgICAgTmlwPzogc3RyaW5nO1xuICAgICAgICBOYW1hPzogc3RyaW5nO1xuICAgICAgICBUZW1wYXQ/OiBzdHJpbmc7XG4gICAgICAgIFRhbmdnYWxsYWhpcj86IHN0cmluZztcbiAgICAgICAgSmVuaXNLZWxhbWluPzogSmVuS2VsO1xuICAgICAgICBBZ2FtYT86IEFnYW1hO1xuICAgICAgICBBbGFtYXQ/OiBzdHJpbmc7XG4gICAgICAgIFN0YXR1cz86IFN0YVR1cztcbiAgICB9XG5cbiAgICBleHBvcnQgbmFtZXNwYWNlIEd1cnVSb3cge1xuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtYSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTWFzdGVyLkd1cnUnO1xuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBOaXAgPSBcIk5pcFwiLFxuICAgICAgICAgICAgTmFtYSA9IFwiTmFtYVwiLFxuICAgICAgICAgICAgVGVtcGF0ID0gXCJUZW1wYXRcIixcbiAgICAgICAgICAgIFRhbmdnYWxsYWhpciA9IFwiVGFuZ2dhbGxhaGlyXCIsXG4gICAgICAgICAgICBKZW5pc0tlbGFtaW4gPSBcIkplbmlzS2VsYW1pblwiLFxuICAgICAgICAgICAgQWdhbWEgPSBcIkFnYW1hXCIsXG4gICAgICAgICAgICBBbGFtYXQgPSBcIkFsYW1hdFwiLFxuICAgICAgICAgICAgU3RhdHVzID0gXCJTdGF0dXNcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWFzdGVyIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIEd1cnVTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTWFzdGVyL0d1cnUnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxHdXJ1Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEd1cnVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxHdXJ1Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxHdXJ1Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XG4gICAgICAgICAgICBDcmVhdGUgPSBcIk1hc3Rlci9HdXJ1L0NyZWF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlID0gXCJNYXN0ZXIvR3VydS9VcGRhdGVcIixcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTWFzdGVyL0d1cnUvRGVsZXRlXCIsXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiTWFzdGVyL0d1cnUvUmV0cmlldmVcIixcbiAgICAgICAgICAgIExpc3QgPSBcIk1hc3Rlci9HdXJ1L0xpc3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgJ0NyZWF0ZScsIFxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXG4gICAgICAgICAgICAnTGlzdCdcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgKDxhbnk+R3VydVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIge1xuICAgIGV4cG9ydCBlbnVtIEplbktlbCB7XG4gICAgICAgIExha2lMYWtpID0gMSxcbiAgICAgICAgUGVyZW1wdWFuID0gMlxuICAgIH1cbiAgICBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRW51bVR5cGUoSmVuS2VsLCAnUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIuSmVuS2VsJywgJ01hc3Rlci5KZW5LZWwnKTtcbn1cbiIsIlxyXG5uYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIge1xyXG4gICAgZXhwb3J0IGNsYXNzIEp1cnVzYW5Db2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdNYXN0ZXIuSnVydXNhbic7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSnVydXNhbkZvcm0ge1xuICAgICAgICBOYW1hSnVydXNhbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBKdXJ1c2FuRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01hc3Rlci5KdXJ1c2FuJztcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcblxuICAgICAgICAgICAgaWYgKCFKdXJ1c2FuRm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIEp1cnVzYW5Gb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcblxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEp1cnVzYW5Gb3JtLCBbXG4gICAgICAgICAgICAgICAgICAgICdOYW1hSnVydXNhbicsIHcwXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSnVydXNhblJvdyB7XG4gICAgICAgIElkSnVydXNhbj86IG51bWJlcjtcbiAgICAgICAgTmFtYUp1cnVzYW4/OiBzdHJpbmc7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBKdXJ1c2FuUm93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWRKdXJ1c2FuJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1hSnVydXNhbic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTWFzdGVyLkp1cnVzYW4nO1xuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ01hc3Rlci5KdXJ1c2FuJztcblxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPEp1cnVzYW5Sb3c+IHtcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxKdXJ1c2FuUm93PignTWFzdGVyLkp1cnVzYW4nKTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdKdXJ1c2FuOk1vZGlmeSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0p1cnVzYW46TW9kaWZ5JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0p1cnVzYW46Vmlldyc7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0p1cnVzYW46TW9kaWZ5JztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XG4gICAgICAgICAgICBJZEp1cnVzYW4gPSBcIklkSnVydXNhblwiLFxuICAgICAgICAgICAgTmFtYUp1cnVzYW4gPSBcIk5hbWFKdXJ1c2FuXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1hc3RlciB7XG4gICAgZXhwb3J0IG5hbWVzcGFjZSBKdXJ1c2FuU2VydmljZSB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ01hc3Rlci9KdXJ1c2FuJztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8SnVydXNhblJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxKdXJ1c2FuUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8SnVydXNhblJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8SnVydXNhblJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xuICAgICAgICAgICAgQ3JlYXRlID0gXCJNYXN0ZXIvSnVydXNhbi9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTWFzdGVyL0p1cnVzYW4vVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIk1hc3Rlci9KdXJ1c2FuL0RlbGV0ZVwiLFxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk1hc3Rlci9KdXJ1c2FuL1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJNYXN0ZXIvSnVydXNhbi9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55Pkp1cnVzYW5TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiXHJcbm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1hc3RlciB7XHJcbiAgICBleHBvcnQgY2xhc3MgS2VsYXNDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdNYXN0ZXIuS2VsYXMnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWFzdGVyIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIEtlbGFzRm9ybSB7XG4gICAgICAgIE5hbWFLZWxhczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBKdXJ1c2FuSWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcbiAgICAgICAgU2lzd2FEZXRhaWw6IFNpc3dhRGV0YWlsRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBLZWxhc0Zvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNYXN0ZXIuS2VsYXMnO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIUtlbGFzRm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIEtlbGFzRm9ybS5pbml0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5Mb29rdXBFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcyID0gU2lzd2FEZXRhaWxFZGl0b3I7XG5cbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShLZWxhc0Zvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ05hbWFLZWxhcycsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnSnVydXNhbklkJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdTaXN3YURldGFpbCcsIHcyXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgS2VsYXNSb3cge1xuICAgICAgICBJZEtlbGFzPzogbnVtYmVyO1xuICAgICAgICBOYW1hS2VsYXM/OiBzdHJpbmc7XG4gICAgICAgIEp1cnVzYW5JZD86IG51bWJlcjtcbiAgICAgICAgSnVydXNhbk5hbWFKdXJ1c2FuPzogc3RyaW5nO1xuICAgICAgICBTaXN3YURldGFpbD86IFNpc3dhUm93W107XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBLZWxhc1JvdyB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkS2VsYXMnO1xuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ05hbWFLZWxhcyc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTWFzdGVyLktlbGFzJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdNYXN0ZXIuS2VsYXMnO1xuXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8S2VsYXNSb3c+IHtcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxLZWxhc1Jvdz4oJ01hc3Rlci5LZWxhcycpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0tlbGFzOk1vZGlmeSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0tlbGFzOk1vZGlmeSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdLZWxhczpWaWV3JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnS2VsYXM6TW9kaWZ5JztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XG4gICAgICAgICAgICBJZEtlbGFzID0gXCJJZEtlbGFzXCIsXG4gICAgICAgICAgICBOYW1hS2VsYXMgPSBcIk5hbWFLZWxhc1wiLFxuICAgICAgICAgICAgSnVydXNhbklkID0gXCJKdXJ1c2FuSWRcIixcbiAgICAgICAgICAgIEp1cnVzYW5OYW1hSnVydXNhbiA9IFwiSnVydXNhbk5hbWFKdXJ1c2FuXCIsXG4gICAgICAgICAgICBTaXN3YURldGFpbCA9IFwiU2lzd2FEZXRhaWxcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWFzdGVyIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIEtlbGFzU2VydmljZSB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ01hc3Rlci9LZWxhcyc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEtlbGFzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEtlbGFzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8S2VsYXNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEtlbGFzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XG4gICAgICAgICAgICBDcmVhdGUgPSBcIk1hc3Rlci9LZWxhcy9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTWFzdGVyL0tlbGFzL1VwZGF0ZVwiLFxuICAgICAgICAgICAgRGVsZXRlID0gXCJNYXN0ZXIvS2VsYXMvRGVsZXRlXCIsXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiTWFzdGVyL0tlbGFzL1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJNYXN0ZXIvS2VsYXMvTGlzdFwiXG4gICAgICAgIH1cblxuICAgICAgICBbXG4gICAgICAgICAgICAnQ3JlYXRlJywgXG4gICAgICAgICAgICAnVXBkYXRlJywgXG4gICAgICAgICAgICAnRGVsZXRlJywgXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcbiAgICAgICAgICAgICdMaXN0J1xuICAgICAgICBdLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAoPGFueT5LZWxhc1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJcclxubmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWFzdGVyIHtcclxuICAgIGV4cG9ydCBjbGFzcyBTaXN3YUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ01hc3Rlci5TaXN3YSc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lzd2FGb3JtIHtcbiAgICAgICAgTmlzOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIE5hbWE6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgVGVtcGF0OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFRhbmdnYWxMYWhpcjogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgSmVuaXNLZWxhbWluOiBTZXJlbml0eS5FbnVtRWRpdG9yO1xuICAgICAgICBBZ2FtYTogU2VyZW5pdHkuRW51bUVkaXRvcjtcbiAgICAgICAgTm9IcDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBBbGFtYXQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgTmFtYUF5YWg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgTmFtYUlidTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBLZWxhc0lkOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNpc3dhRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01hc3Rlci5TaXN3YSc7XG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XG5cbiAgICAgICAgICAgIGlmICghU2lzd2FGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgU2lzd2FGb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5FbnVtRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuTG9va3VwRWRpdG9yO1xuXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoU2lzd2FGb3JtLCBbXG4gICAgICAgICAgICAgICAgICAgICdOaXMnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ05hbWEnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1RlbXBhdCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnVGFuZ2dhbExhaGlyJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdKZW5pc0tlbGFtaW4nLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ0FnYW1hJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdOb0hwJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdBbGFtYXQnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ05hbWFBeWFoJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdOYW1hSWJ1JywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdLZWxhc0lkJywgdzNcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1hc3RlciB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBTaXN3YVJvdyB7XG4gICAgICAgIElkPzogbnVtYmVyO1xuICAgICAgICBOaXM/OiBzdHJpbmc7XG4gICAgICAgIE5hbWE/OiBzdHJpbmc7XG4gICAgICAgIFRlbXBhdD86IHN0cmluZztcbiAgICAgICAgVGFuZ2dhbExhaGlyPzogc3RyaW5nO1xuICAgICAgICBKZW5pc0tlbGFtaW4/OiBnZW5kZXI7XG4gICAgICAgIEFnYW1hPzogQWdhbWE7XG4gICAgICAgIE5vSHA/OiBzdHJpbmc7XG4gICAgICAgIEFsYW1hdD86IHN0cmluZztcbiAgICAgICAgTmFtYUF5YWg/OiBzdHJpbmc7XG4gICAgICAgIE5hbWFJYnU/OiBzdHJpbmc7XG4gICAgICAgIEtlbGFzSWQ/OiBudW1iZXI7XG4gICAgICAgIEtlbGFzTmFtYUtlbGFzPzogc3RyaW5nO1xuICAgICAgICBLZWxhc0p1cnVzYW5JZD86IG51bWJlcjtcbiAgICB9XG5cbiAgICBleHBvcnQgbmFtZXNwYWNlIFNpc3dhUm93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ05hbWEnO1xuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ01hc3Rlci5TaXN3YSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnTWFzdGVyLlNpc3dhJztcblxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFNpc3dhUm93PiB7XG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8U2lzd2FSb3c+KCdNYXN0ZXIuU2lzd2EnKTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdTaXN3YTpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnU2lzd2E6R2VuZXJhbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdTaXN3YTpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnU2lzd2E6R2VuZXJhbCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBOaXMgPSBcIk5pc1wiLFxuICAgICAgICAgICAgTmFtYSA9IFwiTmFtYVwiLFxuICAgICAgICAgICAgVGVtcGF0ID0gXCJUZW1wYXRcIixcbiAgICAgICAgICAgIFRhbmdnYWxMYWhpciA9IFwiVGFuZ2dhbExhaGlyXCIsXG4gICAgICAgICAgICBKZW5pc0tlbGFtaW4gPSBcIkplbmlzS2VsYW1pblwiLFxuICAgICAgICAgICAgQWdhbWEgPSBcIkFnYW1hXCIsXG4gICAgICAgICAgICBOb0hwID0gXCJOb0hwXCIsXG4gICAgICAgICAgICBBbGFtYXQgPSBcIkFsYW1hdFwiLFxuICAgICAgICAgICAgTmFtYUF5YWggPSBcIk5hbWFBeWFoXCIsXG4gICAgICAgICAgICBOYW1hSWJ1ID0gXCJOYW1hSWJ1XCIsXG4gICAgICAgICAgICBLZWxhc0lkID0gXCJLZWxhc0lkXCIsXG4gICAgICAgICAgICBLZWxhc05hbWFLZWxhcyA9IFwiS2VsYXNOYW1hS2VsYXNcIixcbiAgICAgICAgICAgIEtlbGFzSnVydXNhbklkID0gXCJLZWxhc0p1cnVzYW5JZFwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIge1xuICAgIGV4cG9ydCBuYW1lc3BhY2UgU2lzd2FTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTWFzdGVyL1Npc3dhJztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8U2lzd2FSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8U2lzd2FSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxTaXN3YVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8U2lzd2FSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTWFzdGVyL1Npc3dhL0NyZWF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlID0gXCJNYXN0ZXIvU2lzd2EvVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIk1hc3Rlci9TaXN3YS9EZWxldGVcIixcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJNYXN0ZXIvU2lzd2EvUmV0cmlldmVcIixcbiAgICAgICAgICAgIExpc3QgPSBcIk1hc3Rlci9TaXN3YS9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55PlNpc3dhU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1hc3RlciB7XG4gICAgZXhwb3J0IGVudW0gU3RhVHVzIHtcbiAgICAgICAgUGlrZXQgPSAxLFxuICAgICAgICBHdXJ1ID0gMlxuICAgIH1cbiAgICBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRW51bVR5cGUoU3RhVHVzLCAnUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIuU3RhVHVzJywgJ01hc3Rlci5TdGFUdXMnKTtcbn1cbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1hc3RlciB7XG4gICAgZXhwb3J0IGVudW0gZ2VuZGVyIHtcbiAgICAgICAgTGFraUxha2kgPSAxLFxuICAgICAgICBQZXJlbXB1YW4gPSAyXG4gICAgfVxuICAgIFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFbnVtVHlwZShnZW5kZXIsICdQcmVzZW5zaVNlcmVuaXR5Lk1hc3Rlci5nZW5kZXInLCAnU2lzd2EuZ2VuZGVyJyk7XG59XG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBPbGRQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2hhbmdlUGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2hhbmdlUGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ09sZFBhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEZvcmdvdFBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoRm9yZ290UGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpbkZvcm0ge1xyXG4gICAgICAgIFVzZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuTG9naW4nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxvZ2luRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTG9naW5Gb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTG9naW5Gb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpblJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNldFBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJlc2V0UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSZXNldFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSZXNldFBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdOZXdQYXNzd29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRva2VuPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpZ25VcEZvcm0ge1xyXG4gICAgICAgIERpc3BsYXlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgICAgICBDb25maXJtRW1haWw6IFNlcmVuaXR5LkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5TaWduVXAnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNpZ25VcEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFNpZ25VcEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFNpZ25VcEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybUVtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2lnblVwUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcbm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LlByZXNlbnNpIHtcclxuICAgIGV4cG9ydCBjbGFzcyBBYnNlbkNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1ByZXNlbnNpLkFic2VuJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LlByZXNlbnNpIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIEFic2VuRm9ybSB7XG4gICAgICAgIFRhbmdnYWw6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIElqaW46IFNlcmVuaXR5LkVudW1FZGl0b3I7XG4gICAgICAgIEltYWdlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFN0YXR1czogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgU2lzd2FJZDogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xuICAgICAgICBHdXJ1SWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIEFic2VuRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1ByZXNlbnNpLkFic2VuJztcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcblxuICAgICAgICAgICAgaWYgKCFBYnNlbkZvcm0uaW5pdCkgIHtcbiAgICAgICAgICAgICAgICBBYnNlbkZvcm0uaW5pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuRGF0ZUVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkVudW1FZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5TdHJpbmdFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3NCA9IHMuTG9va3VwRWRpdG9yO1xuXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQWJzZW5Gb3JtLCBbXG4gICAgICAgICAgICAgICAgICAgICdUYW5nZ2FsJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdJamluJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdJbWFnZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnU3RhdHVzJywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdTaXN3YUlkJywgdzQsXG4gICAgICAgICAgICAgICAgICAgICdHdXJ1SWQnLCB3M1xuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuUHJlc2Vuc2kge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQWJzZW5Sb3cge1xuICAgICAgICBJZD86IG51bWJlcjtcbiAgICAgICAgVGFuZ2dhbD86IHN0cmluZztcbiAgICAgICAgSWppbj86IElqaW50eXBlO1xuICAgICAgICBJbWFnZT86IHN0cmluZztcbiAgICAgICAgU3RhdHVzPzogbnVtYmVyO1xuICAgICAgICBTaXN3YUlkPzogbnVtYmVyO1xuICAgICAgICBHdXJ1SWQ/OiBudW1iZXI7XG4gICAgICAgIFNpc3dhTmlzPzogc3RyaW5nO1xuICAgICAgICBTaXN3YU5hbWE/OiBzdHJpbmc7XG4gICAgICAgIFNpc3dhVGVtcGF0Pzogc3RyaW5nO1xuICAgICAgICBTaXN3YVRhbmdnYWxMYWhpcj86IHN0cmluZztcbiAgICAgICAgU2lzd2FKZW5pc0tlbGFtaW4/OiBudW1iZXI7XG4gICAgICAgIFNpc3dhQWdhbWE/OiBudW1iZXI7XG4gICAgICAgIFNpc3dhTm9IcD86IHN0cmluZztcbiAgICAgICAgU2lzd2FBbGFtYXQ/OiBzdHJpbmc7XG4gICAgICAgIFNpc3dhTmFtYUF5YWg/OiBzdHJpbmc7XG4gICAgICAgIFNpc3dhTmFtYUlidT86IHN0cmluZztcbiAgICAgICAgU2lzd2FLZWxhc0lkPzogbnVtYmVyO1xuICAgICAgICBHdXJ1TmlwPzogc3RyaW5nO1xuICAgICAgICBHdXJ1TmFtYT86IHN0cmluZztcbiAgICAgICAgR3VydVRlbXBhdD86IHN0cmluZztcbiAgICAgICAgR3VydVRhbmdnYWxsYWhpcj86IHN0cmluZztcbiAgICAgICAgR3VydUplbmlzS2VsYW1pbj86IG51bWJlcjtcbiAgICAgICAgR3VydUFnYW1hPzogbnVtYmVyO1xuICAgICAgICBHdXJ1QWxhbWF0Pzogc3RyaW5nO1xuICAgICAgICBHdXJ1U3RhdHVzPzogbnVtYmVyO1xuICAgIH1cblxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQWJzZW5Sb3cge1xuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnSWppbic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnUHJlc2Vuc2kuQWJzZW4nO1xuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBYnNlbnNpOk1vZGlmeSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0Fic2Vuc2k6TW9kaWZ5JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0Fic2Vuc2k6Vmlldyc7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0Fic2Vuc2k6TW9kaWZ5JztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcbiAgICAgICAgICAgIFRhbmdnYWwgPSBcIlRhbmdnYWxcIixcbiAgICAgICAgICAgIElqaW4gPSBcIklqaW5cIixcbiAgICAgICAgICAgIEltYWdlID0gXCJJbWFnZVwiLFxuICAgICAgICAgICAgU3RhdHVzID0gXCJTdGF0dXNcIixcbiAgICAgICAgICAgIFNpc3dhSWQgPSBcIlNpc3dhSWRcIixcbiAgICAgICAgICAgIEd1cnVJZCA9IFwiR3VydUlkXCIsXG4gICAgICAgICAgICBTaXN3YU5pcyA9IFwiU2lzd2FOaXNcIixcbiAgICAgICAgICAgIFNpc3dhTmFtYSA9IFwiU2lzd2FOYW1hXCIsXG4gICAgICAgICAgICBTaXN3YVRlbXBhdCA9IFwiU2lzd2FUZW1wYXRcIixcbiAgICAgICAgICAgIFNpc3dhVGFuZ2dhbExhaGlyID0gXCJTaXN3YVRhbmdnYWxMYWhpclwiLFxuICAgICAgICAgICAgU2lzd2FKZW5pc0tlbGFtaW4gPSBcIlNpc3dhSmVuaXNLZWxhbWluXCIsXG4gICAgICAgICAgICBTaXN3YUFnYW1hID0gXCJTaXN3YUFnYW1hXCIsXG4gICAgICAgICAgICBTaXN3YU5vSHAgPSBcIlNpc3dhTm9IcFwiLFxuICAgICAgICAgICAgU2lzd2FBbGFtYXQgPSBcIlNpc3dhQWxhbWF0XCIsXG4gICAgICAgICAgICBTaXN3YU5hbWFBeWFoID0gXCJTaXN3YU5hbWFBeWFoXCIsXG4gICAgICAgICAgICBTaXN3YU5hbWFJYnUgPSBcIlNpc3dhTmFtYUlidVwiLFxuICAgICAgICAgICAgU2lzd2FLZWxhc0lkID0gXCJTaXN3YUtlbGFzSWRcIixcbiAgICAgICAgICAgIEd1cnVOaXAgPSBcIkd1cnVOaXBcIixcbiAgICAgICAgICAgIEd1cnVOYW1hID0gXCJHdXJ1TmFtYVwiLFxuICAgICAgICAgICAgR3VydVRlbXBhdCA9IFwiR3VydVRlbXBhdFwiLFxuICAgICAgICAgICAgR3VydVRhbmdnYWxsYWhpciA9IFwiR3VydVRhbmdnYWxsYWhpclwiLFxuICAgICAgICAgICAgR3VydUplbmlzS2VsYW1pbiA9IFwiR3VydUplbmlzS2VsYW1pblwiLFxuICAgICAgICAgICAgR3VydUFnYW1hID0gXCJHdXJ1QWdhbWFcIixcbiAgICAgICAgICAgIEd1cnVBbGFtYXQgPSBcIkd1cnVBbGFtYXRcIixcbiAgICAgICAgICAgIEd1cnVTdGF0dXMgPSBcIkd1cnVTdGF0dXNcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuUHJlc2Vuc2kge1xuICAgIGV4cG9ydCBuYW1lc3BhY2UgQWJzZW5TZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnUHJlc2Vuc2kvQWJzZW4nO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxBYnNlblJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxBYnNlblJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEFic2VuUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxBYnNlblJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xuICAgICAgICAgICAgQ3JlYXRlID0gXCJQcmVzZW5zaS9BYnNlbi9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiUHJlc2Vuc2kvQWJzZW4vVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIlByZXNlbnNpL0Fic2VuL0RlbGV0ZVwiLFxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlByZXNlbnNpL0Fic2VuL1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJQcmVzZW5zaS9BYnNlbi9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55PkFic2VuU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LlByZXNlbnNpIHtcbiAgICBleHBvcnQgZW51bSBJamludHlwZSB7XG4gICAgICAgIFNha2l0ID0gMSxcbiAgICAgICAgQWxwaGEgPSAyLFxuICAgICAgICBJemluID0gM1xuICAgIH1cbiAgICBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRW51bVR5cGUoSWppbnR5cGUsICdQcmVzZW5zaVNlcmVuaXR5LlByZXNlbnNpLklqaW50eXBlJywgJ0Fic2Vuc2kuSWppbicpO1xufVxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY3JpcHRVc2VyRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBZG1pbj86IGJvb2xlYW47XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuVGV4dHMge1xuXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgRGIge1xuXG4gICAgICAgIG5hbWVzcGFjZSBBZG1pbmlzdHJhdGlvbiB7XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBMYW5ndWFnZSB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBSb2xlIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvbiB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVQZXJtaXNzaW9uSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZVJvbGVOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBUcmFuc2xhdGlvbiB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbVRleHQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW50aXR5UGx1cmFsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtleTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPdmVycmlkZUNvbmZpcm1hdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlQ2hhbmdlc0J1dHRvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VMYW5ndWFnZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VUZXh0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldExhbmd1YWdlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldFRleHQ6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXIge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJc0FjdGl2ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0RGlyZWN0b3J5VXBkYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkQ29uZmlybTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZEhhc2g6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmRTYWx0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlckltYWdlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvbiB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50ZWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbktleTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUGVybWlzc2lvbklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUm9sZSB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUm9sZUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lc3BhY2UgTWFzdGVyIHtcblxuICAgICAgICAgICAgbmFtZXNwYWNlIEd1cnUge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZ2FtYTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbGFtYXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSmVuaXNLZWxhbWluOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWE6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmlwOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0YXR1czogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYW5nZ2FsbGFoaXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVtcGF0OiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBKdXJ1c2FuIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWRKdXJ1c2FuOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWFKdXJ1c2FuOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBLZWxhcyB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkS2VsYXM6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSnVydXNhbklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEp1cnVzYW5OYW1hSnVydXNhbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1hS2VsYXM6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lzd2FEZXRhaWw6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIFNpc3dhIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWdhbWE6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWxhbWF0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEplbmlzS2VsYW1pbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBLZWxhc0lkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtlbGFzSnVydXNhbklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtlbGFzTmFtYUtlbGFzOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWE6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtYUF5YWg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtYUlidTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOaXM6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTm9IcDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYW5nZ2FsTGFoaXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVtcGF0OiBzdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lc3BhY2UgUHJlc2Vuc2kge1xuXG4gICAgICAgICAgICBuYW1lc3BhY2UgQWJzZW4ge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHdXJ1QWdhbWE6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR3VydUFsYW1hdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHdXJ1SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR3VydUplbmlzS2VsYW1pbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHdXJ1TmFtYTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHdXJ1TmlwOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEd1cnVTdGF0dXM6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR3VydVRhbmdnYWxsYWhpcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHdXJ1VGVtcGF0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElqaW46IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW1hZ2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lzd2FBZ2FtYTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaXN3YUFsYW1hdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaXN3YUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpc3dhSmVuaXNLZWxhbWluOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpc3dhS2VsYXNJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaXN3YU5hbWE6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lzd2FOYW1hQXlhaDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaXN3YU5hbWFJYnU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lzd2FOaXM6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lzd2FOb0hwOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpc3dhVGFuZ2dhbExhaGlyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpc3dhVGVtcGF0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0YXR1czogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYW5nZ2FsOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBGb3JtcyB7XG5cbiAgICAgICAgbmFtZXNwYWNlIE1lbWJlcnNoaXAge1xuXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ2hhbmdlUGFzc3dvcmQge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIEZvcmdvdFBhc3N3b3JkIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybUluZm86IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBMb2dpbiB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZhY2Vib29rQnV0dG9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcmdvdFBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdvb2dsZUJ1dHRvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMb2dpblRvWW91ckFjY291bnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT1I6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVtZW1iZXJNZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTaWduSW5CdXR0b246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lnblVwQnV0dG9uOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBSZXNldFBhc3N3b3JkIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWxTdWJqZWN0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgU2lnblVwIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWNjZXB0VGVybXM6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGVFbWFpbFN1YmplY3Q6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGlvbkNvbXBsZXRlTWVzc2FnZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCYWNrVG9Mb2dpbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtRW1haWw6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgTmF2aWdhdGlvbiB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBMb2dvdXRMaW5rOiBzdHJpbmc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBTaXRlVGl0bGU6IHN0cmluZztcbiAgICB9XG5cbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBTaXRlIHtcblxuICAgICAgICBuYW1lc3BhY2UgQWNjZXNzRGVuaWVkIHtcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGlja1RvQ2hhbmdlVXNlcjogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENsaWNrVG9Mb2dpbjogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhY2tQZXJtaXNzaW9uczogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vdExvZ2dlZEluOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGFnZVRpdGxlOiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lc3BhY2UgQmFzaWNQcm9ncmVzc0RpYWxvZyB7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FuY2VsVGl0bGU6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQbGVhc2VXYWl0OiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lc3BhY2UgQnVsa1NlcnZpY2VBY3Rpb24ge1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbEhhZEVycm9yc0Zvcm1hdDogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFsbFN1Y2Nlc3NGb3JtYXQ6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtYXRpb25Gb3JtYXQ6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFcnJvckNvdW50OiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTm90aGluZ1RvUHJvY2Vzczogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvbWVIYWRFcnJvcnNGb3JtYXQ6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzQ291bnQ6IHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWVzcGFjZSBEYXNoYm9hcmQge1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbnRlbnREZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZXNwYWNlIExheW91dCB7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVyQ29weXJpZ2h0OiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVySW5mbzogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlclJpZ2h0czogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdlbmVyYWxTZXR0aW5nczogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWU6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsYWNrOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFja0xpZ2h0OiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbHVlOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbHVlTGlnaHQ6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUdyZWVuOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHcmVlbkxpZ2h0OiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVQdXJwbGU6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVB1cnBsZUxpZ2h0OiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWQ6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVJlZExpZ2h0OiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVZZWxsb3c6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVllbGxvd0xpZ2h0OiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25EaWFsb2cge1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdEJ1dHRvbjogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lc3BhY2UgVXNlckRpYWxvZyB7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdFBlcm1pc3Npb25zQnV0dG9uOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdFJvbGVzQnV0dG9uOiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25EaWFsb2cge1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgR3JhbnQ6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUmV2b2tlOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyUm9sZURpYWxvZyB7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGlhbG9nVGl0bGU6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZXNwYWNlIFZhbGlkYXRpb25FcnJvciB7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGl0bGU6IHN0cmluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIFZhbGlkYXRpb24ge1xuICAgICAgICBleHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25FcnJvcjogc3RyaW5nO1xuICAgICAgICBleHBvcnQgY29uc3QgQ2FudEZpbmRVc2VyV2l0aEVtYWlsOiBzdHJpbmc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBDdXJyZW50UGFzc3dvcmRNaXNtYXRjaDogc3RyaW5nO1xuICAgICAgICBleHBvcnQgY29uc3QgRGVsZXRlRm9yZWlnbktleUVycm9yOiBzdHJpbmc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbENvbmZpcm06IHN0cmluZztcbiAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsSW5Vc2U6IHN0cmluZztcbiAgICAgICAgZXhwb3J0IGNvbnN0IEludmFsaWRBY3RpdmF0ZVRva2VuOiBzdHJpbmc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkUmVzZXRUb2tlbjogc3RyaW5nO1xuICAgICAgICBleHBvcnQgY29uc3QgTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aDogc3RyaW5nO1xuICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVByaW1hcnlLZXlFcnJvcjogc3RyaW5nO1xuICAgIH1cblxuICAgIFByZXNlbnNpU2VyZW5pdHlbJ1RleHRzJ10gPSBRLnByb3h5VGV4dHMoVGV4dHMsICcnLCB7RGI6e0FkbWluaXN0cmF0aW9uOntMYW5ndWFnZTp7SWQ6MSxMYW5ndWFnZUlkOjEsTGFuZ3VhZ2VOYW1lOjF9LFJvbGU6e1JvbGVJZDoxLFJvbGVOYW1lOjF9LFJvbGVQZXJtaXNzaW9uOntQZXJtaXNzaW9uS2V5OjEsUm9sZUlkOjEsUm9sZVBlcm1pc3Npb25JZDoxLFJvbGVSb2xlTmFtZToxfSxUcmFuc2xhdGlvbjp7Q3VzdG9tVGV4dDoxLEVudGl0eVBsdXJhbDoxLEtleToxLE92ZXJyaWRlQ29uZmlybWF0aW9uOjEsU2F2ZUNoYW5nZXNCdXR0b246MSxTb3VyY2VMYW5ndWFnZToxLFNvdXJjZVRleHQ6MSxUYXJnZXRMYW5ndWFnZToxLFRhcmdldFRleHQ6MX0sVXNlcjp7RGlzcGxheU5hbWU6MSxFbWFpbDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJc0FjdGl2ZToxLExhc3REaXJlY3RvcnlVcGRhdGU6MSxQYXNzd29yZDoxLFBhc3N3b3JkQ29uZmlybToxLFBhc3N3b3JkSGFzaDoxLFBhc3N3b3JkU2FsdDoxLFNvdXJjZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MSxVc2VySWQ6MSxVc2VySW1hZ2U6MSxVc2VybmFtZToxfSxVc2VyUGVybWlzc2lvbjp7R3JhbnRlZDoxLFBlcm1pc3Npb25LZXk6MSxVc2VyOjEsVXNlcklkOjEsVXNlclBlcm1pc3Npb25JZDoxLFVzZXJuYW1lOjF9LFVzZXJSb2xlOntSb2xlSWQ6MSxVc2VyOjEsVXNlcklkOjEsVXNlclJvbGVJZDoxLFVzZXJuYW1lOjF9fSxNYXN0ZXI6e0d1cnU6e0FnYW1hOjEsQWxhbWF0OjEsSWQ6MSxKZW5pc0tlbGFtaW46MSxOYW1hOjEsTmlwOjEsU3RhdHVzOjEsVGFuZ2dhbGxhaGlyOjEsVGVtcGF0OjF9LEp1cnVzYW46e0lkSnVydXNhbjoxLE5hbWFKdXJ1c2FuOjF9LEtlbGFzOntJZEtlbGFzOjEsSnVydXNhbklkOjEsSnVydXNhbk5hbWFKdXJ1c2FuOjEsTmFtYUtlbGFzOjEsU2lzd2FEZXRhaWw6MX0sU2lzd2E6e0FnYW1hOjEsQWxhbWF0OjEsSWQ6MSxKZW5pc0tlbGFtaW46MSxLZWxhc0lkOjEsS2VsYXNKdXJ1c2FuSWQ6MSxLZWxhc05hbWFLZWxhczoxLE5hbWE6MSxOYW1hQXlhaDoxLE5hbWFJYnU6MSxOaXM6MSxOb0hwOjEsVGFuZ2dhbExhaGlyOjEsVGVtcGF0OjF9fSxQcmVzZW5zaTp7QWJzZW46e0d1cnVBZ2FtYToxLEd1cnVBbGFtYXQ6MSxHdXJ1SWQ6MSxHdXJ1SmVuaXNLZWxhbWluOjEsR3VydU5hbWE6MSxHdXJ1TmlwOjEsR3VydVN0YXR1czoxLEd1cnVUYW5nZ2FsbGFoaXI6MSxHdXJ1VGVtcGF0OjEsSWQ6MSxJamluOjEsSW1hZ2U6MSxTaXN3YUFnYW1hOjEsU2lzd2FBbGFtYXQ6MSxTaXN3YUlkOjEsU2lzd2FKZW5pc0tlbGFtaW46MSxTaXN3YUtlbGFzSWQ6MSxTaXN3YU5hbWE6MSxTaXN3YU5hbWFBeWFoOjEsU2lzd2FOYW1hSWJ1OjEsU2lzd2FOaXM6MSxTaXN3YU5vSHA6MSxTaXN3YVRhbmdnYWxMYWhpcjoxLFNpc3dhVGVtcGF0OjEsU3RhdHVzOjEsVGFuZ2dhbDoxfX19LEZvcm1zOntNZW1iZXJzaGlwOntDaGFuZ2VQYXNzd29yZDp7Rm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxGb3Jnb3RQYXNzd29yZDp7QmFja1RvTG9naW46MSxGb3JtSW5mbzoxLEZvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sTG9naW46e0ZhY2Vib29rQnV0dG9uOjEsRm9yZ290UGFzc3dvcmQ6MSxHb29nbGVCdXR0b246MSxMb2dpblRvWW91ckFjY291bnQ6MSxPUjoxLFJlbWVtYmVyTWU6MSxTaWduSW5CdXR0b246MSxTaWduVXBCdXR0b246MX0sUmVzZXRQYXNzd29yZDp7QmFja1RvTG9naW46MSxFbWFpbFN1YmplY3Q6MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LFNpZ25VcDp7QWNjZXB0VGVybXM6MSxBY3RpdmF0ZUVtYWlsU3ViamVjdDoxLEFjdGl2YXRpb25Db21wbGV0ZU1lc3NhZ2U6MSxCYWNrVG9Mb2dpbjoxLENvbmZpcm1FbWFpbDoxLENvbmZpcm1QYXNzd29yZDoxLERpc3BsYXlOYW1lOjEsRW1haWw6MSxGb3JtSW5mbzoxLEZvcm1UaXRsZToxLFBhc3N3b3JkOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfX19LE5hdmlnYXRpb246e0xvZ291dExpbms6MSxTaXRlVGl0bGU6MX0sU2l0ZTp7QWNjZXNzRGVuaWVkOntDbGlja1RvQ2hhbmdlVXNlcjoxLENsaWNrVG9Mb2dpbjoxLExhY2tQZXJtaXNzaW9uczoxLE5vdExvZ2dlZEluOjEsUGFnZVRpdGxlOjF9LEJhc2ljUHJvZ3Jlc3NEaWFsb2c6e0NhbmNlbFRpdGxlOjEsUGxlYXNlV2FpdDoxfSxCdWxrU2VydmljZUFjdGlvbjp7QWxsSGFkRXJyb3JzRm9ybWF0OjEsQWxsU3VjY2Vzc0Zvcm1hdDoxLENvbmZpcm1hdGlvbkZvcm1hdDoxLEVycm9yQ291bnQ6MSxOb3RoaW5nVG9Qcm9jZXNzOjEsU29tZUhhZEVycm9yc0Zvcm1hdDoxLFN1Y2Nlc3NDb3VudDoxfSxEYXNoYm9hcmQ6e0NvbnRlbnREZXNjcmlwdGlvbjoxfSxMYXlvdXQ6e0Zvb3RlckNvcHlyaWdodDoxLEZvb3RlckluZm86MSxGb290ZXJSaWdodHM6MSxHZW5lcmFsU2V0dGluZ3M6MSxMYW5ndWFnZToxLFRoZW1lOjEsVGhlbWVCbGFjazoxLFRoZW1lQmxhY2tMaWdodDoxLFRoZW1lQmx1ZToxLFRoZW1lQmx1ZUxpZ2h0OjEsVGhlbWVHcmVlbjoxLFRoZW1lR3JlZW5MaWdodDoxLFRoZW1lUHVycGxlOjEsVGhlbWVQdXJwbGVMaWdodDoxLFRoZW1lUmVkOjEsVGhlbWVSZWRMaWdodDoxLFRoZW1lWWVsbG93OjEsVGhlbWVZZWxsb3dMaWdodDoxfSxSb2xlUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxFZGl0QnV0dG9uOjEsU2F2ZVN1Y2Nlc3M6MX0sVXNlckRpYWxvZzp7RWRpdFBlcm1pc3Npb25zQnV0dG9uOjEsRWRpdFJvbGVzQnV0dG9uOjF9LFVzZXJQZXJtaXNzaW9uRGlhbG9nOntEaWFsb2dUaXRsZToxLEdyYW50OjEsUGVybWlzc2lvbjoxLFJldm9rZToxLFNhdmVTdWNjZXNzOjF9LFVzZXJSb2xlRGlhbG9nOntEaWFsb2dUaXRsZToxLFNhdmVTdWNjZXNzOjF9LFZhbGlkYXRpb25FcnJvcjp7VGl0bGU6MX19LFZhbGlkYXRpb246e0F1dGhlbnRpY2F0aW9uRXJyb3I6MSxDYW50RmluZFVzZXJXaXRoRW1haWw6MSxDdXJyZW50UGFzc3dvcmRNaXNtYXRjaDoxLERlbGV0ZUZvcmVpZ25LZXlFcnJvcjoxLEVtYWlsQ29uZmlybToxLEVtYWlsSW5Vc2U6MSxJbnZhbGlkQWN0aXZhdGVUb2tlbjoxLEludmFsaWRSZXNldFRva2VuOjEsTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aDoxLFNhdmVQcmltYXJ5S2V5RXJyb3I6MX19KTtcbn1cbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxMYW5ndWFnZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBMYW5ndWFnZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBMYW5ndWFnZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBMYW5ndWFnZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxMYW5ndWFnZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLkxhbmd1YWdlXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIExhbmd1YWdlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW0xhbmd1YWdlUm93LkZpZWxkcy5MYW5ndWFnZU5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFJvbGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUm9sZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFJvbGVGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuRWRpdEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXBlcm1pc3Npb25zLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtbG9jayB0ZXh0LWdyZWVuJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFJvbGVQZXJtaXNzaW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZUlEOiB0aGlzLmVudGl0eS5Sb2xlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmVudGl0eS5Sb2xlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oXCJlZGl0LXBlcm1pc3Npb25zLWJ1dHRvblwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxSb2xlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uUm9sZVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBSb2xlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1JvbGVSb3cuRmllbGRzLlJvbGVOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZVBlcm1pc3Npb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8Um9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25DaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUGVybWlzc2lvbkNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUGVybWlzc2lvbnMnKSwge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Jldm9rZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBSb2xlUGVybWlzc2lvblNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBSb2xlSUQ6IHRoaXMub3B0aW9ucy5yb2xlSUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzLm1hcCh4ID0+ICg8VXNlclBlcm1pc3Npb25Sb3c+eyBQZXJtaXNzaW9uS2V5OiB4IH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLmltcGxpY2l0UGVybWlzc2lvbnMgPSBRLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLkltcGxpY2l0UGVybWlzc2lvbnMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCk6IEpRdWVyeVVJLkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb2xlUGVybWlzc2lvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVJRDogdGhpcy5vcHRpb25zLnJvbGVJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLm1hcCh4ID0+IHguUGVybWlzc2lvbktleSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5TYXZlU3VjY2VzcycpKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuRGlhbG9nVGl0bGUnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy50aXRsZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBpZD1cIn5fUGVybWlzc2lvbnNcIj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgcm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VHJhbnNsYXRpb25JdGVtLCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiS2V5XCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUcmFuc2xhdGlvblNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGhhc0NoYW5nZXM6IGJvb2xlYW47XHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBzb3VyY2VMYW5ndWFnZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yOyBcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICAgICAgcHJpdmF0ZSB0YXJnZXRMYW5ndWFnZUtleTogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9uKCdrZXl1cC4nICsgdGhpcy51bmlxdWVOYW1lICsgJyBjaGFuZ2UuJyArIHRoaXMudW5pcXVlTmFtZSxcclxuICAgICAgICAgICAgICAgICdpbnB1dC5jdXN0b20tdGV4dCcsIGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gUS50cmltVG9OdWxsKCQoZS50YXJnZXQpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoJChlLnRhcmdldCkuZGF0YSgna2V5JykpLkN1c3RvbVRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgIGxldCBkb25lOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdzb3VyY2UtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRvbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5DdXN0b21UZXh0ID0gaXRlbS5Tb3VyY2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy51cGRhdGVJdGVtKGl0ZW0uS2V5LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoUS5pc1RyaW1tZWRFbXB0eShpdGVtLkN1c3RvbVRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKFEudHJpbVRvRW1wdHkoaXRlbS5DdXN0b21UZXh0KSA9PT0gUS50cmltVG9FbXB0eShpdGVtLlNvdXJjZVRleHQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uT3ZlcnJpZGVDb25maXJtYXRpb24nKSwgZG9uZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygndGFyZ2V0LXRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5DdXN0b21UZXh0ID0gaXRlbS5UYXJnZXRUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy51cGRhdGVJdGVtKGl0ZW0uS2V5LCBpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoUS5pc1RyaW1tZWRFbXB0eShpdGVtLkN1c3RvbVRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKFEudHJpbVRvRW1wdHkoaXRlbS5DdXN0b21UZXh0KSA9PT0gUS50cmltVG9FbXB0eShpdGVtLlRhcmdldFRleHQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUS5jb25maXJtKFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uT3ZlcnJpZGVDb25maXJtYXRpb24nKSwgZG9uZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IFNsaWNrLkNvbHVtbltdIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5zOiBTbGljay5Db2x1bW5bXSA9IFtdO1xyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goeyBmaWVsZDogJ0tleScsIHdpZHRoOiAzMDAsIHNvcnRhYmxlOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1NvdXJjZVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS5vdXRlckh0bWwoJCgnPGEvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc291cmNlLXRleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdDdXN0b21UZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8aW5wdXQvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjdXN0b20tdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgY3R4LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWtleScsIGN0eC5pdGVtLktleSkpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnVGFyZ2V0VGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4gUS5vdXRlckh0bWwoJCgnPGEvPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCd0YXJnZXQtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQoY3R4LnZhbHVlIHx8ICcnKSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBvcHQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBsb29rdXBLZXk6ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSdcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2UgPSBTZXJlbml0eS5XaWRnZXQuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsID0+IGVsLmFwcGVuZFRvKHRoaXMudG9vbGJhci5lbGVtZW50KS5hdHRyKCdwbGFjZWhvbGRlcicsICctLS0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5Tb3VyY2VMYW5ndWFnZScpICsgJyAtLS0nKSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlTGFuZ3VhZ2UuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlRhcmdldExhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUNoYW5nZXMobGFuZ3VhZ2U6IHN0cmluZyk6IFByb21pc2VMaWtlPGFueT4ge1xyXG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnNbaXRlbS5LZXldID0gaXRlbS5DdXN0b21UZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFRyYW5zbGF0aW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRDogbGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGlvbnM6IHRyYW5zbGF0aW9uc1xyXG4gICAgICAgICAgICB9KSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlID0gUS50cmltVG9OdWxsKGxhbmd1YWdlKSB8fCAnaW52YXJpYW50JztcclxuICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcygnVXNlciB0cmFuc2xhdGlvbnMgaW4gXCInICsgbGFuZ3VhZ2UgK1xyXG4gICAgICAgICAgICAgICAgICAgICdcIiBsYW5ndWFnZSBhcmUgc2F2ZWQgdG8gXCJ1c2VyLnRleHRzLicgK1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlICsgJy5qc29uXCIgJyArICdmaWxlIHVuZGVyIFwifi9BcHBfRGF0YS90ZXh0cy9cIicsICcnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3U3VibWl0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMudmlldy5wYXJhbXM7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuU291cmNlTGFuZ3VhZ2VJRCA9IHRoaXMuc291cmNlTGFuZ3VhZ2UudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkgPSB0aGlzLnRhcmdldExhbmd1YWdlLnZhbHVlIHx8ICcnO1xyXG4gICAgICAgICAgICByZXF1ZXN0LlRhcmdldExhbmd1YWdlSUQgPSB0aGlzLnRhcmdldExhbmd1YWdlS2V5O1xyXG4gICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLm9uVmlld1N1Ym1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCk6IFNlcmVuaXR5LlRvb2xCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uU2F2ZUNoYW5nZXNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGUgPT4gdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYXBwbHktY2hhbmdlcy1idXR0b24nXHJcbiAgICAgICAgICAgIH1dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVF1aWNrU2VhcmNoSW5wdXQoKSB7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgKGZpZWxkLCBzZWFyY2hUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25WaWV3RmlsdGVyKGl0ZW06IFRyYW5zbGF0aW9uSXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzZCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3M7XHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hpbmcgPSBzZCh0aGlzLnNlYXJjaFRleHQpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtYXRjaChzdHI6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdHIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaGluZykgPj0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFEuaXNFbXB0eU9yTnVsbChzZWFyY2hpbmcpIHx8IG1hdGNoKGl0ZW0uS2V5KSB8fCBtYXRjaChpdGVtLlNvdXJjZVRleHQpIHx8XHJcbiAgICAgICAgICAgICAgICBtYXRjaChpdGVtLlRhcmdldFRleHQpIHx8IG1hdGNoKGl0ZW0uQ3VzdG9tVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXNlUGFnZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFVzZXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFVzZXJGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNyBjaGFyYWN0ZXJzIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUgIT0gdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGUgcGFzc3dvcmRzIGVudGVyZWQgZG9lc24ndCBtYXRjaCFcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0Um9sZXNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1yb2xlcy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLXVzZXJzIHRleHQtYmx1ZScsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUm9sZURpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0UGVybWlzc2lvbnNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1wZXJtaXNzaW9ucy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLWxvY2sgdGV4dC1ncmVlbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUGVybWlzc2lvbkRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGVJbnRlcmZhY2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdlZGl0LXJvbGVzLWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKFwiZWRpdC1wZXJtaXNzaW9ucy1idXR0b25cIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGVzZSBmaWVsZHMgYXJlIG9ubHkgcmVxdWlyZWQgaW4gbmV3IHJlY29yZCBtb2RlXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFVzZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5Vc2VyXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFVzZXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtVc2VyUm93LkZpZWxkcy5Vc2VybmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuQXV0aG9yaXphdGlvbiB7XHJcbiAgICBleHBvcnQgZGVjbGFyZSBsZXQgdXNlckRlZmluaXRpb246IFNjcmlwdFVzZXJEZWZpbml0aW9uO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdXRob3JpemF0aW9uLCAndXNlckRlZmluaXRpb24nLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldFJlbW90ZURhdGEoJ1VzZXJEYXRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbktleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25LZXkpO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcihbU2VyZW5pdHkuSUdldEVkaXRWYWx1ZSwgU2VyZW5pdHkuSVNldEVkaXRWYWx1ZV0pXHJcbiAgICBleHBvcnQgY2xhc3MgUGVybWlzc2lvbkNoZWNrRWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuRGF0YUdyaWQ8UGVybWlzc2lvbkNoZWNrSXRlbSwgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFwiS2V5XCI7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgcHJpdmF0ZSBieVBhcmVudEtleTogUS5Hcm91cGluZzxQZXJtaXNzaW9uQ2hlY2tJdGVtPjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnksIG9wdDogUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIsIG9wdCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4gPSB7fTtcclxuICAgICAgICAgICAgbGV0IHBlcm1pc3Npb25LZXlzID0gdGhpcy5nZXRTb3J0ZWRHcm91cEFuZFBlcm1pc3Npb25LZXlzKHRpdGxlQnlLZXkpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBwZXJtaXNzaW9uS2V5cy5tYXAoa2V5ID0+IDxQZXJtaXNzaW9uQ2hlY2tJdGVtPntcclxuICAgICAgICAgICAgICAgIEtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgUGFyZW50S2V5OiB0aGlzLmdldFBhcmVudEtleShrZXkpLFxyXG4gICAgICAgICAgICAgICAgVGl0bGU6IHRpdGxlQnlLZXlba2V5XSxcclxuICAgICAgICAgICAgICAgIEdyYW50UmV2b2tlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgSXNHcm91cDoga2V5LmNoYXJBdChrZXkubGVuZ3RoIC0gMSkgPT09ICc6J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlQYXJlbnRLZXkgPSBRLnRvR3JvdXBpbmcoaXRlbXMsIHggPT4geC5QYXJlbnRLZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSwgZ3JhbnQ6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoaXRlbS5HcmFudFJldm9rZSA9PT0gZ3JhbnQpID8gJyBjaGVja2VkJyA6ICcnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGRlc2MgPSB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGRlc2MuZmlsdGVyKHggPT4geC5HcmFudFJldm9rZSA9PT0gZ3JhbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVzYy5sZW5ndGggPT09IGdyYW50ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQgcGFydGlhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJvbGVPckltcGxpY2l0KGtleSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcm9sZVBlcm1pc3Npb25zW2tleV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2YgT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIG9mIE9iamVjdC5rZXlzKHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uR3JhbnRSZXZva2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZCAmJiBkW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1FZmZlY3RpdmVDbGFzcyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGxldCBncmFudENvdW50ID0gUS5jb3VudChkZXNjLCB4ID0+IHguR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAoeC5HcmFudFJldm9rZSA9PSBudWxsICYmIHRoaXMucm9sZU9ySW1wbGljaXQoeC5LZXkpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdyYW50Q291bnQgPT09IGRlc2MubGVuZ3RoIHx8IGRlc2MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhbGxvdyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGdyYW50Q291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2RlbnknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAncGFydGlhbCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBncmFudGVkID0gaXRlbS5HcmFudFJldm9rZSA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KGl0ZW0uS2V5KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKGdyYW50ZWQgPyAnIGFsbG93JyA6ICcgZGVueScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uczogU2xpY2suQ29sdW1uW10gPSBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlBlcm1pc3Npb24nKSxcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnVGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBTZXJlbml0eS5TbGlja0Zvcm1hdHRpbmcudHJlZVRvZ2dsZSgoKSA9PiB0aGlzLnZpZXcsIHggPT4geC5LZXksIGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MgPSB0aGlzLmdldEl0ZW1FZmZlY3RpdmVDbGFzcyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiZWZmZWN0aXZlLXBlcm1pc3Npb24gJyArIGtsYXNzICsgJ1wiPicgKyBRLmh0bWxFbmNvZGUoY3R4LnZhbHVlKSArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ5NSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuR3JhbnQnKSwgZmllbGQ6ICdHcmFudCcsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMSA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdjaGVjay1ib3ggZ3JhbnQgbm8tZmxvYXQgXCIgKyBrbGFzczEgKyBcIic+PC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGhlYWRlckNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1Jldm9rZSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuUmV2b2tlJyksIGZpZWxkOiAnUmV2b2tlJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMiA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2xhc3MyID0gdGhpcy5nZXRJdGVtR3JhbnRSZXZva2VDbGFzcyhpdGVtMiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiY2hlY2stYm94IHJldm9rZSBuby1mbG9hdCAnICsga2xhc3MyICsgJ1wiPjwvc3Bhbj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0SXRlbXMoaXRlbXM6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSk6IHZvaWQge1xyXG4gICAgICAgICAgICBTZXJlbml0eS5TbGlja1RyZWVIZWxwZXIuc2V0SW5kZW50cyhpdGVtcywgeCA9PiB4LktleSwgeCA9PiB4LlBhcmVudEtleSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXMoaXRlbXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld1N1Ym1pdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLmZpbHRlckJ5SWQoaXRlbSwgdGhpcy52aWV3LCB4ID0+IHguUGFyZW50S2V5KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hdGNoQ29udGFpbnMoaXRlbSkgfHwgaXRlbS5Jc0dyb3VwICYmIFEuYW55KHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgZmFsc2UpLCB4ID0+IHRoaXMubWF0Y2hDb250YWlucyh4KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBtYXRjaENvbnRhaW5zKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0pOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoaXRlbS5UaXRsZSB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dCkgPj0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0RGVzY2VuZGFudHMoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSwgZXhjbHVkZUdyb3VwczogYm9vbGVhbik6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFBlcm1pc3Npb25DaGVja0l0ZW1bXSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3RhY2sgPSBbaXRlbV07XHJcbiAgICAgICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5ieVBhcmVudEtleVtpLktleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGNsdWRlR3JvdXBzIHx8ICFjaGlsZC5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZSwgcm93LCBjZWxsKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnRvZ2dsZUNsaWNrKGUsIHJvdywgY2VsbCwgdGhpcy52aWV3LCB4ID0+IHguS2V5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBsZXQgZ3JhbnQgPSB0YXJnZXQuaGFzQ2xhc3MoJ2dyYW50Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3JhbnQgfHwgdGFyZ2V0Lmhhc0NsYXNzKCdyZXZva2UnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja2VkT3JQYXJ0aWFsID0gdGFyZ2V0Lmhhc0NsYXNzKCdjaGVja2VkJykgfHwgdGFyZ2V0Lmhhc0NsYXNzKCdwYXJ0aWFsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRPclBhcnRpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFudCA9IGdyYW50ICE9PSBjaGVja2VkT3JQYXJ0aWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkIG9mIHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5HcmFudFJldm9rZSA9IGdyYW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkdyYW50UmV2b2tlID0gZ3JhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlja0dyaWQuaW52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFBhcmVudEtleShrZXkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoa2V5LmNoYXJBdChrZXkubGVuZ3RoIC0gMSkgPT09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cigwLCBrZXkubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpZHggPSBrZXkubGFzdEluZGV4T2YoJzonKTtcclxuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5LnN1YnN0cigwLCBpZHggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCk6IFNlcmVuaXR5LlRvb2xCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsIChmaWVsZCwgdGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLnRyaW1Ub051bGwodGV4dCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5OiBRLkRpY3Rpb25hcnk8c3RyaW5nPik6IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgbGV0IGtleXMgPSA8c3RyaW5nW10+US5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5QZXJtaXNzaW9uS2V5cycpO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGVXaXRoR3JvdXAgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgayBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IGs7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHMuY2hhckF0KHMubGVuZ3RoIC0gMSkgPT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVCeUtleVtzXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbc10gPSBRLmNvYWxlc2NlKFEudHJ5R2V0VGV4dCgnUGVybWlzc2lvbi4nICsgcyksIHMpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gcy5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXBUaXRsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cCA9IGdyb3VwICsgcGFydHNbaV0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR4dCA9IFEudHJ5R2V0VGV4dCgnUGVybWlzc2lvbi4nICsgZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQgPSBwYXJ0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVCeUtleVtncm91cF0gPSB0eHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUaXRsZSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W2dyb3VwXSArICc6JztcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtncm91cF0gPSBncm91cFRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlV2l0aEdyb3VwW3NdID0gZ3JvdXBUaXRsZSArIHRpdGxlQnlLZXlbc107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAga2V5cyA9IGtleXMuc29ydCgoeCwgeSkgPT4gUS50dXJraXNoTG9jYWxlQ29tcGFyZSh0aXRsZVdpdGhHcm91cFt4XSwgdGl0bGVXaXRoR3JvdXBbeV0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHZhbHVlKCk6IFVzZXJQZXJtaXNzaW9uUm93W10ge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogVXNlclBlcm1pc3Npb25Sb3dbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZXcuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uR3JhbnRSZXZva2UgIT0gbnVsbCAmJiBpdGVtLktleS5jaGFyQXQoaXRlbS5LZXkubGVuZ3RoIC0gMSkgIT0gJzonKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBQZXJtaXNzaW9uS2V5OiBpdGVtLktleSwgR3JhbnRlZDogaXRlbS5HcmFudFJldm9rZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCB2YWx1ZSh2YWx1ZTogVXNlclBlcm1pc3Npb25Sb3dbXSkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZXcuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3cgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgciA9IHRoaXMudmlldy5nZXRJdGVtQnlJZChyb3cuUGVybWlzc2lvbktleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci5HcmFudFJldm9rZSA9IFEuY29hbGVzY2Uocm93LkdyYW50ZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfcm9sZVBlcm1pc3Npb25zOiBRLkRpY3Rpb25hcnk8Ym9vbGVhbj4gPSB7fTtcclxuXHJcbiAgICAgICAgZ2V0IHJvbGVQZXJtaXNzaW9ucygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yb2xlUGVybWlzc2lvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHJvbGVQZXJtaXNzaW9ucyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgb2YgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb2xlUGVybWlzc2lvbnNba10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1zKHRoaXMuZ2V0SXRlbXMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9pbXBsaWNpdFBlcm1pc3Npb25zOiBRLkRpY3Rpb25hcnk8US5EaWN0aW9uYXJ5PGJvb2xlYW4+PiA9IHt9O1xyXG5cclxuICAgICAgICBzZXQgaW1wbGljaXRQZXJtaXNzaW9ucyh2YWx1ZTogUS5EaWN0aW9uYXJ5PHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zID0ge307XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXSA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSB2YWx1ZVtrXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIG9mIGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdW3NdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tFZGl0b3JPcHRpb25zIHtcclxuICAgICAgICBzaG93UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25DaGVja0l0ZW0ge1xyXG4gICAgICAgIFBhcmVudEtleT86IHN0cmluZztcclxuICAgICAgICBLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgVGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNHcm91cD86IGJvb2xlYW47XHJcbiAgICAgICAgR3JhbnRSZXZva2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJQZXJtaXNzaW9uRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9uQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogVXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFBlcm1pc3Npb25DaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1Blcm1pc3Npb25zJyksIHtcclxuICAgICAgICAgICAgICAgIHNob3dSZXZva2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuTGlzdCh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSA9IHJlc3BvbnNlLkVudGl0aWVzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5MaXN0Um9sZVBlcm1pc3Npb25zKHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5yb2xlUGVybWlzc2lvbnMgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLmltcGxpY2l0UGVybWlzc2lvbnMgPSBRLmdldFJlbW90ZURhdGEoJ0FkbWluaXN0cmF0aW9uLkltcGxpY2l0UGVybWlzc2lvbnMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCk6IEpRdWVyeVVJLkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdidG4gYnRuLXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJtaXNzaW9uczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVDaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkNoZWNrVHJlZUVkaXRvcjxTZXJlbml0eS5DaGVja1RyZWVJdGVtPGFueT4sIGFueT4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoZGl2OiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGl2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3ModGV4dCB8fCAnJykudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUcmVlSXRlbXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSb2xlUm93LmdldExvb2t1cCgpLml0ZW1zLm1hcChyb2xlID0+IDxTZXJlbml0eS5DaGVja1RyZWVJdGVtPGFueT4+e1xyXG4gICAgICAgICAgICAgICAgaWQ6IHJvbGUuUm9sZUlkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiByb2xlLlJvbGVOYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5vblZpZXdGaWx0ZXIoaXRlbSkgJiZcclxuICAgICAgICAgICAgICAgIChRLmlzRW1wdHlPck51bGwodGhpcy5zZWFyY2hUZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgIFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoaXRlbS50ZXh0IHx8ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dCkgPj0gMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nPFVzZXJSb2xlRGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHBlcm1pc3Npb25zOiBSb2xlQ2hlY2tFZGl0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG9wdDogVXNlclJvbGVEaWFsb2dPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG9wdCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gbmV3IFJvbGVDaGVja0VkaXRvcih0aGlzLmJ5SWQoJ1JvbGVzJykpO1xyXG5cclxuICAgICAgICAgICAgVXNlclJvbGVTZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklEXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcy5tYXAoeCA9PiB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dPcHRpb25zKCkge1xyXG4gICAgICAgICAgICB2YXIgb3B0ID0gc3VwZXIuZ2V0RGlhbG9nT3B0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgb3B0LmJ1dHRvbnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLk9rQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2J0biBidG4tcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFEuc2VydmljZVJlcXVlc3QoJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSb2xlczogdGhpcy5wZXJtaXNzaW9ucy52YWx1ZS5tYXAoeCA9PiBwYXJzZUludCh4LCAxMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuVXNlclJvbGVEaWFsb2cuU2F2ZVN1Y2Nlc3MnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuVXNlclJvbGVEaWFsb2cuRGlhbG9nVGl0bGUnKSwgdGhpcy5vcHRpb25zLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBpZD0nfl9Sb2xlcyc+PC9kaXY+XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVEaWFsb2dPcHRpb25zIHtcclxuICAgICAgICB1c2VySUQ6IG51bWJlcjtcclxuICAgICAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTGFuZ3VhZ2VMaXN0IHtcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0OiBzdHJpbmdbXVtdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgayBvZiBBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy5nZXRMb29rdXAoKS5pdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoay5MYW5ndWFnZUlkICE9PSAnZW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChbay5JZC50b1N0cmluZygpLCBrLkxhbmd1YWdlTmFtZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbi9IZWxwZXJzL0xhbmd1YWdlTGlzdC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5TY3JpcHRJbml0aWFsaXphdGlvbiB7XHJcbiAgICBRLkNvbmZpZy5yZXNwb25zaXZlRGlhbG9ncyA9IHRydWU7XHJcbiAgICBRLkNvbmZpZy5yb290TmFtZXNwYWNlcy5wdXNoKCdQcmVzZW5zaVNlcmVuaXR5Jyk7XHJcbiAgICBTZXJlbml0eS5FbnRpdHlEaWFsb2cuZGVmYXVsdExhbmd1YWdlTGlzdCA9IExhbmd1YWdlTGlzdC5nZXRWYWx1ZTtcclxuICAgIFNlcmVuaXR5Lkh0bWxDb250ZW50RWRpdG9yLkNLRWRpdG9yQmFzZVBhdGggPSBcIn4vU2VyZW5pdHkuQXNzZXRzL1NjcmlwdHMvY2tlZGl0b3IvXCI7XHJcblxyXG4gICAgaWYgKCQuZm5bJ2NvbG9yYm94J10pIHtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heFdpZHRoID0gXCI5NSVcIjtcclxuICAgICAgICAkLmZuWydjb2xvcmJveCddLnNldHRpbmdzLm1heEhlaWdodCA9IFwiOTUlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9uZXJyb3IgPSBRLkVycm9ySGFuZGxpbmcucnVudGltZUVycm9ySGFuZGxlcjtcclxufSIsIm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LkNvbW1vbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgU2lkZWJhclNlYXJjaCBleHRlbmRzIFNlcmVuaXR5LldpZGdldDxhbnk+IHtcclxuICAgICAgICBwcml2YXRlIG1lbnVVTDogSlF1ZXJ5O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihpbnB1dDogSlF1ZXJ5LCBtZW51VUw6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihpbnB1dCk7XHJcblxyXG4gICAgICAgICAgICBuZXcgU2VyZW5pdHkuUXVpY2tTZWFyY2hJbnB1dChpbnB1dCwge1xyXG4gICAgICAgICAgICAgICAgb25TZWFyY2g6IChmaWVsZCwgdGV4dCwgc3VjY2VzcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWF0Y2hGbGFncyh0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWVudVVMID0gbWVudVVMO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZU1hdGNoRmxhZ3ModGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBsaUxpc3QgPSB0aGlzLm1lbnVVTC5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHRleHQgPSBRLnRyaW1Ub051bGwodGV4dCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3Quc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFydHMgPSB0ZXh0LnJlcGxhY2UoJywnLCAnICcpLnNwbGl0KCcgJykuZmlsdGVyKHggPT4gIVEuaXNUcmltbWVkRW1wdHkoeCkpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBRLnRyaW1Ub051bGwoU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhwYXJ0c1tpXSkudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IGxpTGlzdDtcclxuICAgICAgICAgICAgaXRlbXMuZWFjaChmdW5jdGlvbiAoaWR4LCBlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9ICQoZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKFEuY29hbGVzY2UoeC50ZXh0KCksICcnKS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgb2YgcGFydHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocCAhPSBudWxsICYmICEodGl0bGUuaW5kZXhPZihwKSAhPT0gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHguYWRkQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hdGNoaW5nSXRlbXMgPSBpdGVtcy5ub3QoJy5ub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2aXNpYmxlcyA9IG1hdGNoaW5nSXRlbXMucGFyZW50cygnbGknKS5hZGQobWF0Y2hpbmdJdGVtcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbm9uVmlzaWJsZXMgPSBsaUxpc3Qubm90KHZpc2libGVzKTtcclxuICAgICAgICAgICAgbm9uVmlzaWJsZXMuaGlkZSgpLmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgIHZpc2libGVzLnNob3coKTtcclxuICAgICAgICAgICAgbGlMaXN0LmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEd1cnVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8R3VydVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBHdXJ1Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBHdXJ1Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gR3VydVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gR3VydVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEd1cnVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEd1cnVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gR3VydVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBHdXJ1Um93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgR3VydUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1hc3RlciB7XHJcblxyXG4gICAgaW1wb3J0IGZsZCA9IEd1cnVSb3cuRmllbGRzO1xyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgR3VydUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEd1cnVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gR3VydUNvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gR3VydURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gR3VydVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBHdXJ1Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gR3VydVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEd1cnVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBzdXBlci5nZXRCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChTZXJlbml0eS5FeHRlbnNpb25zLkV4Y2VsRXhwb3J0SGVscGVyLmNyZWF0ZVRvb2xCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKSxcclxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IEd1cnVTZXJ2aWNlLmJhc2VVcmwgKyAnL0xpc3RFeGNlbCcsXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IHRydWVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goU2VyZW5pdHkuRXh0ZW5zaW9ucy5QZGZFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRRdWlja1NlYXJjaEZpZWxkcygpOiBTZXJlbml0eS5RdWlja1NlYXJjaEZpZWxkW10ge1xyXG4gICAgICAgICAgICBjb25zdCB0eHQgPSAocykgPT5cclxuICAgICAgICAgICAgICAgIFEudGV4dChgRGIuJHtHdXJ1Um93LmxvY2FsVGV4dFByZWZpeH0uJHtzfWApLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwiXCIsIHRpdGxlOiBcImFsbFwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IGZsZC5OaXAsIHRpdGxlOiB0eHQoZmxkLk5pcCkgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogZmxkLk5hbWEsIHRpdGxlOiB0eHQoZmxkLk5hbWEpIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IGZsZC5BbGFtYXQsIHRpdGxlOiB0eHQoZmxkLkFsYW1hdCkgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59IiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWFzdGVyIHtcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckZvcm1hdHRlcigpXG4gICAgZXhwb3J0IGNsYXNzIEplbktlbEZvcm1hdHRlciBpbXBsZW1lbnRzIFNsaWNrLkZvcm1hdHRlciB7XG4gICAgICAgIGZvcm1hdChjdHg6IFNsaWNrLkZvcm1hdHRlckNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBKZW5pc0tlbGFtaW4gPSBwYXJzZUludChjdHgudmFsdWUpO1xuICAgICAgICAgICAgdmFyIGVudW1KZW5pc0tlbGFtaW4gPSBQcmVzZW5zaVNlcmVuaXR5Lk1hc3Rlci5KZW5LZWw7XG4gICAgICAgICAgICBpZiAoSmVuaXNLZWxhbWluID09IGVudW1KZW5pc0tlbGFtaW4uTGFraUxha2kpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+PGkgY2xhc3M9XCJmYSBmYS1tYWxlIFwiPjwvaT5MYWtpIExha2k8L2Rpdj5gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChKZW5pc0tlbGFtaW4gPT0gZW51bUplbmlzS2VsYW1pbi5QZXJlbXB1YW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+PGkgY2xhc3M9XCJmYSBmYS1mZW1hbGUgXCI+PC9pPlBlcmVtcHVhbjwvZGl2PmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiXHJcbm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1hc3RlciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgSnVydXNhbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxKdXJ1c2FuUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEp1cnVzYW5Gb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEp1cnVzYW5Sb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBKdXJ1c2FuUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBKdXJ1c2FuUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gSnVydXNhblNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gSnVydXNhblJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBKdXJ1c2FuUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEp1cnVzYW5Sb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBKdXJ1c2FuRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWFzdGVyIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBKdXJ1c2FuR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8SnVydXNhblJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBKdXJ1c2FuQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBKdXJ1c2FuRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBKdXJ1c2FuUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEp1cnVzYW5Sb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBKdXJ1c2FuUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gSnVydXNhblNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIERldGFpbFNpc3dhRWRpdG9yRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRXh0ZW5zaW9ucy5HcmlkRWRpdG9yRGlhbG9nPFNpc3dhUm93PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBTaXN3YUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBTaXN3YVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gOiBTaXN3YUZvcm07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IFNpc3dhRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5Lk1hc3RlciB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgS2VsYXNEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8S2VsYXNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gS2VsYXNGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEtlbGFzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gS2VsYXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEtlbGFzUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gS2VsYXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEtlbGFzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEtlbGFzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEtlbGFzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgS2VsYXNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEtlbGFzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8S2VsYXNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gS2VsYXNDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEtlbGFzRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBLZWxhc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBLZWxhc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEtlbGFzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gS2VsYXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWFzdGVyIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcihcIlByZXNlbnNpU2VyZW5pdHkuU2lzd2FEZXRhaWxFZGl0b3JcIilcclxuICAgIGV4cG9ydCBjbGFzcyBTaXN3YURldGFpbEVkaXRvciBleHRlbmRzXHJcbiAgICAgICAgU2VyZW5pdHkuRXh0ZW5zaW9ucy5HcmlkRWRpdG9yQmFzZTxTaXN3YVJvdz4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gU2lzd2FDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIERldGFpbFNpc3dhRWRpdG9yRGlhbG9nIH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU2lzd2FSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRBZGRCdXR0b25DYXB0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJBZGRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHByb3RlY3RlZCBnZXRRdWlja0ZpbHRlcnMoKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBmbHQgPSBzdXBlci5nZXRRdWlja0ZpbHRlcnMoKTtcclxuICAgICAgICAvLyAgICAgdmFyIHEgPSB0aGlzLmlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8gICAgIHZhciBjYXRlZ29yeSA9IFEudHJ5Rmlyc3QoZmx0LCB4ID0+IHguZmllbGQgPT0gXCJLZWxhc05hbWFLZWxhc1wiKTtcclxuICAgICAgICAvLyAgICAgY2F0ZWdvcnkuaW5pdCA9IGUgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgZS5lbGVtZW50LmdldFdpZGdldChTZXJlbml0eS5Mb29rdXBFZGl0b3IpLnZhbHVlID0gcTtcclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIGZsdDtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIgeyBcclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRm9ybWF0dGVyKCkgXHJcbiAgICBleHBvcnQgY2xhc3MgR2VuZGVyRm9ybWF0dGVyIGltcGxlbWVudHMgU2xpY2suRm9ybWF0dGVyIHsgXHJcbiAgICAgICAgZm9ybWF0KGN0eDogU2xpY2suRm9ybWF0dGVyQ29udGV4dCkgeyBcclxuICAgICAgICAgICAgdmFyIEplbmlzS2VsYW1pbiA9IHBhcnNlSW50KGN0eC52YWx1ZSk7IFxyXG4gICAgICAgICAgICB2YXIgZW51bUplbmlzS2VsYW1pbiA9IFByZXNlbnNpU2VyZW5pdHkuTWFzdGVyLmdlbmRlcjsgXHJcbiBcclxuICAgICAgICAgICAgaWYgKEplbmlzS2VsYW1pbiA9PSBlbnVtSmVuaXNLZWxhbWluLkxha2lMYWtpKSB7IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc8ZGl2PjxpIGNsYXNzPVwiZmEgZmEtbWFsZSB0ZXh0LXByaW1hcnlcIiA+PC9pPiBMYWtpIExha2k8L2Rpdj4nOyBcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChKZW5pc0tlbGFtaW4gPT0gZW51bUplbmlzS2VsYW1pbi5QZXJlbXB1YW4pIHsgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXY+PGkgY2xhc3M9XCJmYSBmYS1mZW1hbGUgdGV4dC1kYW5nZXJcIj48L2k+IFBlcmVtcHVhbjwvZGl2Pic7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gXHJcbiAgICB9IFxyXG59ICIsIlxyXG5uYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NYXN0ZXIge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNpc3dhRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFNpc3dhUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNpc3dhRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTaXN3YVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFNpc3dhUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBTaXN3YVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFNpc3dhU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTaXN3YVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBTaXN3YVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTaXN3YVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFNpc3dhRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWFzdGVyIHtcclxuICAgIGltcG9ydCBmbGQgPSBTaXN3YVJvdy5GaWVsZHM7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU2lzd2FHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxTaXN3YVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBTaXN3YUNvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gU2lzd2FEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFNpc3dhUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFNpc3dhUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU2lzd2FSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBTaXN3YVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFF1aWNrU2VhcmNoRmllbGRzKCk6IFNlcmVuaXR5LlF1aWNrU2VhcmNoRmllbGRbXSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR4dCA9IChzKSA9PlxyXG4gICAgICAgICAgICAgICAgUS50ZXh0KGBEYi4ke1Npc3dhUm93LmxvY2FsVGV4dFByZWZpeH0uJHtzfWApLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBcIlwiLCB0aXRsZTogXCJhbGxcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBmbGQuTmlzLCB0aXRsZTogdHh0KGZsZC5OaXMpIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IGZsZC5OYW1hLCB0aXRsZTogdHh0KGZsZC5OYW1hKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBmbGQuQWxhbWF0LCB0aXRsZTogdHh0KGZsZC5BbGFtYXQpIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IGZsZC5KZW5pc0tlbGFtaW4sIHRpdGxlOiB0eHQoZmxkLkplbmlzS2VsYW1pbikgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFNlcmVuaXR5LkV4dGVuc2lvbnMuRXhjZWxFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZTogU2lzd2FTZXJ2aWNlLmJhc2VVcmwgKyAnL0xpc3RFeGNlbCcsXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IHRydWVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goU2VyZW5pdHkuRXh0ZW5zaW9ucy5QZGZFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTbGlja09wdGlvbnMoKTogU2xpY2suR3JpZE9wdGlvbnMge1xyXG4gICAgICAgICAgICBsZXQgb3B0ID0gc3VwZXIuZ2V0U2xpY2tPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIG9wdC5yb3dIZWlnaHQgPSA4MDtcclxuICAgICAgICAgICAgb3B0LmVuYWJsZVRleHRTZWxlY3Rpb25PbkNlbGxzID0gdHJ1ZTtcclxuICAgICAgICAgICAgb3B0LnNlbGVjdGVkQ2VsbENzc0NsYXNzID0gXCJzbGljay1yb3ctc2VsZWN0ZWRcIjtcclxuICAgICAgICAgICAgb3B0LmVuYWJsZUNlbGxOYXZpZ2F0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVTbGlja0dyaWQoKTogU2xpY2suR3JpZCB7XHJcbiAgICAgICAgICAgIHZhciBncmlkID0gc3VwZXIuY3JlYXRlU2xpY2tHcmlkKCk7XHJcbiAgICAgICAgICAgIGdyaWQuc2V0U2VsZWN0aW9uTW9kZWwobmV3IFNsaWNrLlJvd1NlbGVjdGlvbk1vZGVsKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZ3JpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG4gICAgICAgICAgICB2YXIgY29sdW1ucyA9IHN1cGVyLmdldENvbHVtbnMoKTtcclxuICAgICAgICAgICAgUS5maXJzdChjb2x1bW5zLCB4ID0+IHguZmllbGQgPT0gZmxkLk5pcykuZm9ybWF0ID1cclxuICAgICAgICAgICAgICAgIGN0eCA9PiBgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiQnVrdS1cclxuICAgICAgICAgICAgbGlua1wiPiR7US5odG1sRW5jb2RlKGN0eC52YWx1ZSl9PC9hPmA7XHJcblxyXG5cclxuICAgICAgICAgICAgY29sdW1ucy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnRGVsZXRlIFJvdycsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb3JtYXQ6IGN0eCA9PiAnPGEgY2xhc3M9XCJpbmxpbmUtYWN0aW9uIGRlbGV0ZS1yb3dcIiB0aXRsZT1cImRlbGV0ZSBcclxuICAgICAgICAgICAgICAgIC8vICAgICBcInN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiID4gJyArXHJcbiAgICAgICAgICAgICAgICAvLyAnPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vIHRleHQtcmVkXCI+PC9pPjwvYT4nLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4gYDxhIGNsYXNzPVwiaW5saW5lLWFjdGlvbiB2aWV3LWRldGFpbHNcIiB0aXRsZT1cInZpZXctZGV0YWlsc1wiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPjxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvYT5gLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0LFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDI0LFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IDI0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xpY2soZTogSlF1ZXJ5RXZlbnRPYmplY3QsIHJvdzogbnVtYmVyLCBjZWxsOiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBiYXNlIGdyaWQgaGFuZGxlIGNsaWNrcyBmb3IgaXRzIGVkaXQgbGlua3NcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgYmFzZSBncmlkIGFscmVhZHkgaGFuZGxlZCwgd2Ugc2hvdWxkblwidCBoYW5kbGUgaXQgYWdhaW5cclxuICAgICAgICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBjdXJyZW50IGl0ZW1cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBjbGlja2VkIGVsZW1lbnRcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHRhcmdldC5oYXNDbGFzcyhcIkJ1a3UtbGlua1wiKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIGxldCBtZXNzYWdlID0gUS5mb3JtYXQoXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXCI8cD5BbmRhIG1lbmVrYW4gU2VidWFoIERldGFpbCBCdWt1PC9wPlwiICtcclxuICAgICAgICAgICAgLy8gICAgICAgICBcIjxwPkppa2EgQW5kYSBNZW5la2FuIFlFUywgTWFrYSBJdHUgQWthbiBNZW1idWthIEZvcm0gQnVrdTwvcD5cIiArXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXCI8cD5KaWthIEFuZGEgTWVuZWthbiBOTywgTWFrYSBJdHUgQWthbiBNZW51dHVwIERpYWxvZzwvcD5cIixcclxuICAgICAgICAgICAgLy8gICAgICAgICBRLmh0bWxFbmNvZGUoaXRlbS5KdWR1bEJ1a3UpKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICBRLmNvbmZpcm0obWVzc2FnZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIEN1c3RvbWVyRGlhbG9nIGRvZXNuJ3QgdXNlIEN1c3RvbWVySUQgYnV0IElEIChpZGVudGl0eSlcclxuICAgICAgICAgICAgLy8gICAgICAgICAvLyBzbyBuZWVkIHRvIGZpbmQgY3VzdG9tZXIgdG8gZ2V0IGl0cyBhY3R1YWwgSURcclxuICAgICAgICAgICAgLy8gICAgICAgICB2YXIgYnVrdSA9IFEuZmlyc3QoUGVycHVzdGFrYWFuLkJ1a3VSb3cuZ2V0TG9va3VwKCkuaXRlbXMsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHggPT4geC5KdWR1bEJ1a3UgPT0gaXRlbS5KdWR1bEJ1a3UpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICBuZXcgUGVycHVzdGFrYWFuLkJ1a3VEaWFsb2coKS5sb2FkQnlJZEFuZE9wZW5EaWFsb2coYnVrdS5JZCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaHRtbEVuY29kZTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG9uTm86ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIFEubm90aWZ5SW5mbyhcIkFuZGEgTWVuZWthbiBOby4gS2VuYXBhP1wiKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gZWxzZSBpZiAodGFyZ2V0Lmhhc0NsYXNzKFwiUmFrLWxpbmtcIikpIHtcclxuICAgICAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICBRLm5vdGlmeVN1Y2Nlc3MoXCJBbmRhIE1lbWZpbHRlciBEYXRhIFJhayBcIiArIGl0ZW0uTmFtYVJhayk7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgcmFrRmlsdGVyID0gdGhpcy5maW5kUXVpY2tGaWx0ZXIoU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIFBlcnB1c3Rha2Fhbi5CdWt1Um93LkZpZWxkcy5JZFJhayk7XHJcbiAgICAgICAgICAgIC8vICAgICByYWtGaWx0ZXIudmFsdWUgPSBpdGVtLklkUmFrLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmICh0YXJnZXQuaGFzQ2xhc3MoXCJLYXRlZ29yaS1saW5rXCIpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgUS5ub3RpZnlTdWNjZXNzKFwiQW5kYSBNZW1maWx0ZXIgRGF0YSBLYXRlZ29yaSBcIiArIGl0ZW0uTmFtYUthdGVnb3JpKTtcclxuICAgICAgICAgICAgLy8gICAgIHZhciBrYXRlZ29yaUZpbHRlciA9IHRoaXMuZmluZFF1aWNrRmlsdGVyKFNlcmVuaXR5Lkxvb2t1cEVkaXRvcixcclxuICAgICAgICAgICAgLy8gICAgICAgICBQZXJwdXN0YWthYW4uQnVrdVJvdy5GaWVsZHMuSWRLYXRlZ29yaSk7XHJcbiAgICAgICAgICAgIC8vICAgICBrYXRlZ29yaUZpbHRlci52YWx1ZSA9IGl0ZW0uSWRLYXRlZ29yaS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQucGFyZW50KCkuaGFzQ2xhc3MoJ2lubGluZS1hY3Rpb24nKSlcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzQ2xhc3MoJ2lubGluZS1hY3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzQ2xhc3MoJ2RlbGV0ZS1yb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIFEuY29uZmlybSgnRGVsZXRlIHJlY29yZD8nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIFBlcnB1c3Rha2Fhbi5CdWt1U2VydmljZS5EZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgRW50aXR5SWQ6IGl0ZW0uSWQsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldC5oYXNDbGFzcygndmlldy1kZXRhaWxzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmVkaXRJdGVtKGl0ZW0uSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWFsb2cgPSBuZXcgUHJlc2Vuc2kuQWJzZW5EaWFsb2coKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXREaWFsb2coZGlhbG9nKTtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cubG9hZEVudGl0eUFuZE9wZW5EaWFsb2coPFByZXNlbnNpLkFic2VuUm93PnsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpc3dhSWQgOiBpdGVtLklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHdXJ1SWQgOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpblBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxMb2dpblJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIExvZ2luRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ0xvZ2luQnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Mb2dpbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUb1JldHVyblVybCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogKHJlc3BvbnNlOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvci5Db2RlID09IFwiUmVkaXJlY3RVc2VyVG9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5FcnJvci5Bcmd1bWVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yICE9IG51bGwgJiYgIVEuaXNFbXB0eU9yTnVsbChyZXNwb25zZS5FcnJvci5NZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlFcnJvcihyZXNwb25zZS5FcnJvci5NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNQYXNzd29yZCcpLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLkVycm9ySGFuZGxpbmcuc2hvd1NlcnZpY2VFcnJvcihyZXNwb25zZS5FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlZGlyZWN0VG9SZXR1cm5VcmwoKSB7XHJcbiAgICAgICAgICAgIHZhciBxID0gUS5wYXJzZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHZhciByZXR1cm5VcmwgPSBxWydyZXR1cm5VcmwnXSB8fCBxWydSZXR1cm5VcmwnXTtcclxuICAgICAgICAgICAgaWYgKHJldHVyblVybCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNoICE9IG51bGwgJiYgaGFzaCAhPSAnIycpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVXJsICs9IGhhc2g7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJldHVyblVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICA8aDIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTRcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIiR7US5yZXNvbHZlVXJsKFwifi9Db250ZW50L3NpdGUvaW1hZ2VzL3NlcmVuaXR5LWxvZ28tdy0xMjgucG5nXCIpfVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1jaXJjbGUgcC0xXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zLXNpZGViYXItYmFuZC1iZylcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiAvPiBQcmVzZW5zaVNlcmVuaXR5XHJcbiAgICA8L2gyPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzLVBhbmVsIHAtNFwiPlxyXG4gICAgICAgIDxoNSBjbGFzcz1cInRleHQtY2VudGVyIG15LTRcIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uTG9naW5Ub1lvdXJBY2NvdW50XCIpfTwvaDU+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIn5fUHJvcGVydHlHcmlkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbG9hdC1lbmQgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5Gb3Jnb3RQYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIn5fTG9naW5CdXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbXktMyB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5TaWduSW5CdXR0b25cIil9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTJcIj5cclxuICAgICAgICA8YSBjbGFzcz1cInRleHQtZGVjb3JhdGlvbi1ub25lXCIgaHJlZj1cIiR7US5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyl9XCI+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25VcEJ1dHRvblwiKX08L2E+XHJcbiAgICA8L2Rpdj4gICBcclxuYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxDaGFuZ2VQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENoYW5nZVBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogQ2hhbmdlUGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IENoYW5nZVBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5OZXdQYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS53KCdDb25maXJtUGFzc3dvcmQnLCBTZXJlbml0eS5QYXNzd29yZEVkaXRvcikudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9DaGFuZ2VQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJzLVBhbmVsXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJwYWdlLXRpdGxlIG1iLTQgdGV4dC1jZW50ZXJcIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuRm9ybVRpdGxlXCIpfTwvaDM+XHJcbiAgICA8Zm9ybSBpZD1cIn5fRm9ybVwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ+X1Byb3BlcnR5R3JpZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZCBtdC00XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ+X1N1Ym1pdEJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Ym1pdEJ1dHRvblwiKX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8Rm9yZ290UGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBGb3Jnb3RQYXNzd29yZEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IEZvcmdvdFBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBGb3Jnb3RQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgUHJlc2Vuc2lTZXJlbml0eS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFJlc2V0UGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSZXNldFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogUmVzZXRQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgUmVzZXRQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5Ub2tlbiA9IHRoaXMuYnlJZCgnVG9rZW4nKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvUmVzZXRQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFByZXNlbnNpU2VyZW5pdHkuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFNpZ25VcFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNpZ25VcEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IFNpZ25VcEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgU2lnblVwRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtRW1haWwuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybUVtYWlsLnZhbHVlICE9PSB0aGlzLmZvcm0uRW1haWwudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLkVtYWlsQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNwbGF5TmFtZTogdGhpcy5mb3JtLkRpc3BsYXlOYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDogdGhpcy5mb3JtLkVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDogdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuU2lnblVwLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LlByZXNlbnNpIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBBYnNlbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxBYnNlblJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBBYnNlbkZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQWJzZW5Sb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBYnNlblJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQWJzZW5Sb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBBYnNlblNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQWJzZW5Sb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQWJzZW5Sb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQWJzZW5Sb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBBYnNlbkZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBQcmVzZW5zaVNlcmVuaXR5LlByZXNlbnNpIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBBYnNlbkdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEFic2VuUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEFic2VuQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBBYnNlbkRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQWJzZW5Sb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQWJzZW5Sb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBBYnNlblJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEFic2VuU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19