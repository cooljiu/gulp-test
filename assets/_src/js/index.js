import * as myFunc from './modulse/myFunc';

//関数のパラメータにデフォルト値をつける
function test(x, y = 5) {
    return x + y;
}

document.write(test(3)+'<hr>'); //8

let arrow = (val) => {
    return val+'アロー関数が使えます！';
};
document.write(arrow('HELLO! ') + '<hr>');

//クラス定義、set,get
class TestClass {
    constructor(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
}

let testClass = new TestClass('蒲田');
testClass.Name = '山田';
document.write(testClass.name+'<hr>'); // 山田

//Set型定義
let familyNames = new Set(['鈴木', '佐藤', '櫻井','林','鈴木']);
document.write(familyNames.size+'<hr>'); // 4

if(familyNames.has('佐藤')) {
    document.write('佐藤さんが入っています！'+'<hr>');
}
//ESモジュール import / export を使う
document.write(myFunc.square(100)+'<hr>'); //10000
document.write(myFunc.diag(4, 3)); //5