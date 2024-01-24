const reader = require('xlsx');
let numberOfSheet=0;
let saoNam = [],
    hanNam = [],
    saoNu = [],
    hanNu = [];

function tinhSao() {
    saoNam = [];
    saoNu = [];
    for (let i = 0; i <= 10; i++) {
        saoNam[i] = "";
        saoNu[i] = "";
    }
    for (let i = 11; i <= 100; i++) {
        switch (i) {
            case 11:
            case 20:
            case 29:
            case 38:
            case 47:
            case 56:
            case 65:
            case 74:
            case 83:
            case 92:
                saoNam[i] = "Thổ Tú";
                saoNu[i] = "Vân Hớn";
                break;
            case 12:
            case 21:
            case 30:
            case 39:
            case 48:
            case 57:
            case 66:
            case 75:
            case 84:
            case 93:
                saoNam[i] = "Thủy Diệu";
                saoNu[i] = "Mộc Đức";
                break;
            case 13:
            case 22:
            case 31:
            case 40:
            case 49:
            case 58:
            case 67:
            case 76:
            case 85:
            case 94:
                saoNam[i] = "Thái bạch";
                saoNu[i] = "Thái Âm";
                break;
            case 14:
            case 23:
            case 32:
            case 41:
            case 50:
            case 59:
            case 68:
            case 77:
            case 86:
            case 95:
                saoNam[i] = "Thái Dương";
                saoNu[i] = "Thổ Tú";
                break;
            case 15:
            case 24:
            case 33:
            case 42:
            case 51:
            case 60:
            case 69:
            case 78:
            case 87:
            case 96:
                saoNam[i] = "Vân Hớn";
                saoNu[i] = "La Hầu";
                break;
            case 16:
            case 25:
            case 34:
            case 43:
            case 52:
            case 61:
            case 70:
            case 79:
            case 88:
            case 97:
                saoNam[i] = "Kế Đô";
                saoNu[i] = "Thái Dương";
                break;
            case 17:
            case 26:
            case 35:
            case 44:
            case 53:
            case 62:
            case 71:
            case 80:
            case 89:
            case 98:
                saoNam[i] = "Thái Âm";
                saoNu[i] = "Thái Bạch";
                break;
            case 18:
            case 27:
            case 36:
            case 45:
            case 54:
            case 63:
            case 72:
            case 81:
            case 90:
            case 99:
                saoNam[i] = "Mộc Đức";
                saoNu[i] = "Thủy Diệu";
                break;
            case 19:
            case 28:
            case 37:
            case 46:
            case 55:
            case 64:
            case 73:
            case 82:
            case 91:
            case 100:
                saoNam[i] = "La Hầu";
                saoNu[i] = "Kế Đô";
                break;
        }
    }
    for (let i = 101; i <= 200; i++) {
        saoNam[i] = "";
        saoNu[i] = "";
    }
}
function tinhHan() {
    hanNam = [];
    hanNu = [];
    for (let i = 0; i <= 10; i++) {
        hanNam[i] = "";
        hanNu[i] = "";
    }
    for (let i = 11; i <= 100; i++) {
        switch (i) {
            case 11:
            case 19:
            case 20:
            case 28:
            case 37:
            case 46:
            case 55:
            case 64:
            case 73:
            case 82:
            case 91:
            case 99:
            case 100:
                hanNam[i] = "Tam Kheo";
                hanNu[i] = "Thiên Tinh";
                break;
            case 12:
            case 21:
            case 29:
            case 30:
            case 38:
            case 47:
            case 56:
            case 65:
            case 74:
            case 83:
            case 92:
                hanNam[i] = "Ngũ Mộ";
                hanNu[i] = "Ngũ Mộ";
                break;
            case 13:
            case 22:
            case 31:
            case 39:
            case 40:
            case 48:
            case 57:
            case 66:
            case 75:
            case 84:
            case 93:
                hanNam[i] = "Thiên Tinh";
                hanNu[i] = "Tam Kheo";
                break;
            case 14:
            case 23:
            case 32:
            case 41:
            case 49:
            case 50:
            case 58:
            case 67:
            case 76:
            case 85:
            case 94:
                hanNam[i] = "Tán Tận";
                hanNu[i] = "Huỳnh Tiền";
                break;
            case 15:
            case 24:
            case 33:
            case 42:
            case 51:
            case 59:
            case 60:
            case 68:
            case 77:
            case 86:
            case 95:
                hanNam[i] = "Thiên La";
                hanNu[i] = "Diêm Vương";
                break;
            case 16:
            case 25:
            case 34:
            case 43:
            case 52:
            case 61:
            case 69:
            case 70:
            case 78:
            case 87:
            case 96:
                hanNam[i] = "Địa Võng";
                hanNu[i] = "Địa Võng";
                break;
            case 17:
            case 26:
            case 35:
            case 44:
            case 53:
            case 62:
            case 71:
            case 79:
            case 80:
            case 88:
            case 97:
                hanNam[i] = "Diêm Vương";
                hanNu[i] = "Thiên La";
                break;
            case 18:
            case 27:
            case 36:
            case 45:
            case 54:
            case 63:
            case 72:
            case 81:
            case 89:
            case 90:
            case 98:
                hanNam[i] = "Huỳnh Tiền";
                hanNu[i] = "Tán Tận";
                break;
        }
    }
    for (let i = 101; i <= 200; i++) {
        hanNam[i] = "";
        hanNu[i] = "";
    }
}

const calSaoHan = (data)=>{
    let persons = [...data];
    tinhSao();
    tinhHan();
    for (let i = 0; i < persons.length; i++) {
        let person = persons[i];

        if(Object.keys(person).length==0)
            continue;
        if ((person.GioiTinh.toLowerCase().includes("nam") || person.GioiTinh.toLowerCase().includes("nữ"))
            && person.Tuoi != ""
            && Number.isInteger(parseInt(person.Tuoi))) {
            let tuoi = parseInt(person.Tuoi) + 1;
            person.Tuoi = tuoi.toString();

            if (person.GioiTinh.toLowerCase().includes("nam")) {//Nam
                person.Sao = saoNam[tuoi];
                person.Han = hanNam[tuoi];
            } else {//Nu
                person.Sao = saoNu[tuoi];
                person.Han = hanNu[tuoi];
            }
        } else if (person.GioiTinh != ""//Bị Lỗi gì đó thì ghi lỗi
            || person.Ten != ""
            || person.NamSinh != ""
            || person.Tuoi != ""
            || person.Sao != ""
            || person.Han != "") {
            person.GioiTinh = person.GioiTinh;
            person.Han = "Thiếu thông tin."
        }
    }
    return persons;
}


const readExcelAndInsertToDatabase = () =>{
    //Read File
    const file = reader.readFile('./Sao_Han_2024_Finally.xlsx');
    let data = [];
    const sheets = file.SheetNames;
    numberOfSheet=sheets.length;
    for(let i = 0; i < sheets.length; i++)
    {
        if(file.SheetNames[i]=='Sheet1') {
            const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]], {blankrows: true});
            temp.forEach((res) => {
                data.push(res);
            });
        }
    }
    return data;
}

const writeExcel = (persons)=>{
    const file = reader.readFile('./Sao_Han_2024_Finally.xlsx');
    const ws = reader.utils.json_to_sheet(persons);
    numberOfSheet++;
    const sheetName = "Result"+numberOfSheet;
    reader.utils.book_append_sheet(file,ws,sheetName);
    reader.writeFile(file,'./Sao_Han_2024_Finally.xlsx')
}

const main = ()=>{
    //Read database;
    let data = readExcelAndInsertToDatabase();
    let result =calSaoHan(data);
    writeExcel(result);
}

main();