let po = new Promise((Resolve, Reject) => {
    setTimeout(() =>{
        Resolve('Resolve');
    },10000)
});


po.then((d)=>{
    console.log(d);
}).catch((e)=>{ 
    console.error(e);
}).finally();