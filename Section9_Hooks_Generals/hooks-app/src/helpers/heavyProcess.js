const heavyProcess = (iterations) => {
    for(let i=0; i<iterations; i++ ){
        console.log('Running');
    }
    return `${iterations} iterations realized`
}

export default heavyProcess