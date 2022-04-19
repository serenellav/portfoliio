import Link from "next/link"



const Logo = (): JSX.Element => (
    <div
    className="Logo"
  
    >
       
        <Link href="/" >
            <a> 
            <h1 style={{fontWeight:"800",margin:0}}>PAOLO
            <span style={{color:"#008069"}}>PIEZ</span>
            </h1>
            </a>
        </Link>
    
    </div>
)

export default Logo