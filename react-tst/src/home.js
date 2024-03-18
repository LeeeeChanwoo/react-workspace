const Home = (props) => {
    const {movies, onDeleteMovie} = props;
    return(
        <div>
            <h1>Movies</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Realese Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((movie)=>{
                           return <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.release_date}</td>
                                <td>
                                    <button onClick={()=>onDeleteMovie(movie.id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Home;