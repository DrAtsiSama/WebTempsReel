export default function ShowRoute2(){
    const array = ['node1', 'node2', 'node3'];
    return (
        <div className="h-screen bg-blue">
            {
                array.map((item,i) => {
                    return <div key={i}>{item} </div>
                })
            }
        </div>
    )
}