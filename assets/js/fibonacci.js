function fibonacci1(limite){
    let a= 0;
    let b= 1;

    for(;a <= limite;){
        console.log(a);
        let gv = b;
        b = a + b;
        a = gv;

    }
}
fibonacci1(1000);

function fibonacci2(limite){
    let c= 0;
    let d= 1;

    for(;c <=limite;){
        if(c % 2 === 0){
        console.log(c);
        }
        let gv= d;
        d = c + d;
        c= gv;

        }
    }
fibonacci2(1000);

function fibonacci3(limite){
    let e= 0;
    let f= 1;

    for(;e <=limite;){
        if( e % 2 !== 0){
            console.log(e);
        }
        let gv=f;
        f= e + f;
        e= gv;
    }
}
fibonacci3(1000);