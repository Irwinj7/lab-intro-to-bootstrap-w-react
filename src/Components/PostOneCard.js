import images from "../images"

export default function PostOneCard({ post }){
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img className="card-img-top img-fluid object-fit-cover post-image-height" src={images[post.location.toLowerCase().replaceAll(" ", "-")]} alt={post.location}/>
                <div className="card-body p-4">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-subtitle mb-2 text-muted">{post.location}</p>
                    <p className="text-truncate">{post.content}</p>
                    <div className="text-end">
                        <button className="btn btn-warning">Go to post ▶️</button>
                    </div>
                </div>
            </div>
        </div>
    )
}