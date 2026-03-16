export default function RenderList({index,title,genre}) {
    return (
        <li className="p-2" key={index}>
            <div className="card bg-light">
                <div className="d-flex align-items-center justify-content-around p-1">
                    <h4 >{title}</h4>
                    <span >{genre}</span>
                </div>
            </div>

        </li>
    )
}