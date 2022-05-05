import Link from "next/link"



const Logo = (): JSX.Element => (
	<div>
		<Link href="/" >
			<a>
				<span className="logo logo-1">PAOLO
					<span className="logo-2">PIEZ</span>
				</span>
			</a>
		</Link>
	</div>
)

export default Logo