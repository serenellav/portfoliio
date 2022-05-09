import Link from "next/link"



const Logo = (): JSX.Element => (
	<div>
		<Link href="/" >
			<a>
				<span className="logo logo-1">Serenella
					<span className="logo-2">Vezzi</span>
				</span>
			</a>
		</Link>
	</div>
)

export default Logo