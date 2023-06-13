function Table({ posts }) {

    const locations = {};
    posts.forEach(post =>  locations[post.location] ? locations[post.location]++:locations[post.location]=1);
    const keys = Object.keys(locations);

return (
    <div className="col-lg-3">
        <h4>Posts by <span className="text-warning">location</span></h4>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Location</th>
                    <th className="text-center" scope="col">Posts</th>
                </tr>
            </thead>
            <tbody>
                {keys.map(key => 
                    <tr key={key}>
                        <th scope="row">{key}</th>
                        <td className="text-center"><span className="badge text-bg-secondary">{locations[key]}</span></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
)
}
export default Table;