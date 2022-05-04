import React from "react";
import Image from 'next/image'

import Link from 'next/link'


interface Props {

	item?: any,

}

const Card: React.FC<Props> = ({ item }) => {


	return (
		<li className={`card`}>
			<Link href={`/post/${item?.id}`} scroll={false} >
				<a>
					<div
						className="card-content-container">
						<div className="card-content">
							<div className="card-image-container">
								<Image alt="Paolo Minopoli" layout="fill"
									className="card-image" src={item?.acf?.anteprima ? item?.acf?.anteprima : ""} />
							</div>
						</div>
					
					</div>

				</a>
			</Link>

		</li>
	);
}

export default Card;