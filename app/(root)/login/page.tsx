export default function Login() {
	return (
		<main className="flex flex-col font-sans items-center mt-16">
			<div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-2">
				<section className="flex flex-col justify-center items-center p-6">
					{/* Left column content */}
					<h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
					<p className="text-midground mb-6 text-center">
						Sign in to your account to continue.
					</p>
				</section>
				<section className="flex flex-col justify-center items-center p-6">
					{/* Right column content */}
					<form className="w-full max-w-sm flex flex-col gap-4">
						<input
							type="email"
							placeholder="Email"
							className="border rounded px-4 py-2"
						/>
						<input
							type="password"
							placeholder="Password"
							className="border rounded px-4 py-2"
						/>
						<button
							type="submit"
							className="bg-primary text-background rounded px-4 py-2 font-semibold"
						>
							Login
						</button>
					</form>
				</section>
			</div>
		</main>
	);
}
