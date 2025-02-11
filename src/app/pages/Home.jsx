import React from 'react'
import { Link } from 'react-router'
import { FaChartPie } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";


export const Home = () => {
	const imageUrl = "https://static.vecteezy.com/system/resources/previews/017/566/984/non_2x/operating-expenses-glyph-two-color-icon-vector.jpg";
	// lista de caracteristicas
	const features = [
		{
			icon: <FaChartPie className='w-20 h-20 ' />,
			title: "Análisis Detallado",
			description: "Visualiza tus gastos con gráficos intuitivos."

		},
		{
			icon: <CiCalendarDate className='w-20 h-20 ' />,
			title: "Gestión de Gastos",
			description: "Registra y categoriza fácilmente todos tus gastos e ingresos en un solo lugar."
		},
		{
			icon: <FaArrowTrendUp className='w-20 h-20 ' />,
			title: "Metas Financieras",
			description: "Establece y monitorea tus objetivos financieros con herramientas de seguimiento personalizado."
		}
	]

	return (
		<div className=" min-h-screen flex flex-col">
			{/* Contenido Principal */}
			<div className='flex-grow'>
				{/* navbar */}
				<nav className="bg-white shadow-sm flex justify-between items-center  w-full">
					<div className="flex flex-row items-center">
						<img
							src={imageUrl}
							alt="logoHome"
							className="w-20 ml-4 mb-4"
						/>
						<h1 className=" text-2xl font-serif text-blue-950  font-bold ml-4 mb-4">
							Gestor de gastos
						</h1>
					</div>

					<div className="flex gap-10 p-4">
						<Link
							to="/auth/login"
							className="bg-white text-gray-500 rounded-sm px-4 py-2 hover:bg-gray-200 transition duration-500"
						>
							Iniciar sesión
						</Link>
						<Link
							to="/auth/register"
							className="bg-blue-950 rounded-sm text-white px-4 py-2 hover:bg-blue-900 transition duration-500"
						>
							Registrate
						</Link>
					</div>
				</nav>

				{/* presentacion */}
				<div className="flex flex-col mt-10 mb-10 justify-top ">
					<div className=" text-3xl font-extrabold text-gray-800 text-center">
						<h2>
							<span className="block">Controla tus finanzas</span>
							<span className="text-blue-800">
								de manera eficiente
							</span>
						</h2>
						<p className="text-gray-500 font-normal text-xl text-center">
							Gestiona tus gastos, establece metas y toma el control
							de tu <br />
							dinero con la aplicación más completa del mercado.
						</p>
					</div>
				</div>

				{/* Caracteristicas de la app */}

				<div className="">
					{features.map((index) => (
						<div
							key={index.title}
							className="flex justify-center items-center gap-12 px-8 mt-12 flex-wrap"
						>
							<div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg w-200">
								<div className="text-blue-950">{index.icon}</div>
								<h2 className="font-bold">{index.title}</h2>
								<p className="">{index.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>



			<footer className="bg-white text-center py-4 mt-auto">
				<p className="text-gray-500">
					© 2025 Todos los derechos reservados.
				</p>
			</footer>

		</div>

	);

}

