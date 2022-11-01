import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
		<div className="w-full flex flex-col items-center h-screen justify-center">
			<div className="flex flex-col xs:w-2/3 xs:min-w-[300px] w-full px-3 max-w-[500px] md:w-1/2 ">
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-semibold">Signup</h2>
					<div className="flex items-center text-xl">
						<p className="text-slate-300">New to Cruz?</p>
						<Link
							to="/login"
							className="text-orange-600 underline ml-2 cursor-pointer"
						>
							Login
						</Link>
					</div>
				</div>
				<div className="flex flex-col-reverse mt-4 text-xl">
					<input
						type="text"
						className="border-b-2 bg-transparent z-10 input focusin mt-2 border-slate-300 px-2 py-1 outline-none focus:border-orange-600"
						id="email"
						placeholder="Enter email"
					/>
					<label
						htmlFor="email"
						className="font-semibold px-2 text-base lablel"
					>
						Email
					</label>
				</div>
				<div className="flex flex-col-reverse mt-8 text-xl">
					<input
						type="password"
						className="border-b-2 bg-transparent z-10 input focusin mt-2 border-slate-300 px-2 py-1 outline-none focus:border-orange-600"
						id="password"
						placeholder="Enter password"
					/>
					<label
						htmlFor="password"
						className="font-semibold px-2 text-base lablel"
					>
						Password
					</label>
				</div>
				<p className="mt-4 px-2 cursor-pointer hover:text-orange-600 duration-300">
					Forget Password?
				</p>
				<button className="bg-orange-600 text-white font-semibold mt-6 py-3 rounded-[2em] text-xl hover:bg-orange-500 transition duration-200">
					Signup
				</button>
			</div>
		</div>
	);
}

export default Signup