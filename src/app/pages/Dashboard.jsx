export const Dashboard = () => {
	return (
		<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
			{/* Ingresos del mes */}
			<div className="bg-white p-4 rounded-2xl shadow-lg">
				<h2 className="text-lg font-semibold mb-2">Ingresos del Mes</h2>
				<div className="relative w-full h-32 bg-gray-200 rounded-lg">
					<div className="absolute bottom-0 left-0 w-1/2 h-3/4 bg-green-500 rounded-md"></div>
					<div className="absolute bottom-0 left-1/2 w-1/2 h-2/3 bg-green-400 rounded-md"></div>
				</div>
			</div>

			{/* Egresos del mes */}
			<div className="bg-white p-4 rounded-2xl shadow-lg">
				<h2 className="text-lg font-semibold mb-2">Egresos del Mes</h2>
				<div className="relative w-full h-32 bg-gray-200 rounded-lg">
					<div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-red-500 rounded-md"></div>
					<div className="absolute bottom-0 left-1/3 w-1/3 h-3/4 bg-red-400 rounded-md"></div>
					<div className="absolute bottom-0 left-2/3 w-1/3 h-1/2 bg-red-300 rounded-md"></div>
				</div>
			</div>

			{/* Proyección de gastos */}
			<div className="bg-white p-4 rounded-2xl shadow-lg">
				<h2 className="text-lg font-semibold mb-2">
					Proyección de Gastos
				</h2>
				<svg viewBox="0 0 36 36" className="w-24 h-24 mx-auto">
					<circle
						className="text-gray-200"
						strokeWidth="3.8"
						stroke="currentColor"
						fill="transparent"
						r="15.915"
						cx="18"
						cy="18"
					/>
					<circle
						className="text-blue-500"
						strokeWidth="3.8"
						strokeDasharray="70, 100"
						strokeLinecap="round"
						stroke="currentColor"
						fill="transparent"
						r="15.915"
						cx="18"
						cy="18"
					/>
				</svg>
			</div>
		</div>
	);
};
