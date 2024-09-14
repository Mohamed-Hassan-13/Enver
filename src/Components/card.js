export default function Card(props){
    return(
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div><img style={{scale:"1.2"}} src={props.img} alt="" /></div>
            <h2>{props.title}</h2>
            <p className="text-secondary">{props.text}</p>
        </div>
    )
}