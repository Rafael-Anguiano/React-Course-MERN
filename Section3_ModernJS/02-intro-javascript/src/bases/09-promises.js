import { getHeroById, getHeroesByOwner } from "./bases/08-imp-exp";

// const promise = new Promise((resolve, reject)=>{
//     setTimeout( () => {
//         const hero = getHeroById(2)
//         console.log('hero :', hero);
//         resolve( hero );
//         // reject( 'Hero not found' );
//     }, 3000 )
// });

// promise.then( (hero)=> {
//     console.log('Then hero :', hero);
// })
//     .catch(err => console.warn(err) );

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout( () => {
            const hero = getHeroById(id)
            // console.log('hero :', hero);
            
            if(hero){
                resolve( hero );
            }else{
                reject( 'Hero not found' );
            }
            
        }, 3000 )
    });
}

getHeroByIdAsync(1)
    .then( console.log )
    .catch( console.warn ) 