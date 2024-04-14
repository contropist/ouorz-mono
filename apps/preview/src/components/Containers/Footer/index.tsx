import { EST_SINCE } from "@/constants/info"
import responsive from "@/styles/responsive.module.css"
import cn from "clsx"

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="relative z-footer -mt-footer flex h-footer">
			<div
				className={cn(
					responsive["sidebar-width"],
					"flex-shrink-0 bg-yellow-500"
				)}>
				<p>
					&copy; {EST_SINCE} - {currentYear} Tony He
				</p>
			</div>
			<div className="w-full bg-transparent" />
		</footer>
	)
}

export default Footer