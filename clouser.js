const name = 'John';

function a() {
    var b = 4;

    function c() {
        var name = 5;
        console.log(name);

        console.log(b);
    }

    return c;
}

const result = a();
result();
