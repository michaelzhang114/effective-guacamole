"use client";
import React, { useEffect, useState } from "react";

import { useSession } from "next-auth/react";

const Dashboard = () => {
	const [data, setData] = useState([]);
	const [err, setErr] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getData = async () => {
			setIsLoading(true);
			const res = await fetch(
				"https://jsonplaceholder.typicode.com/posts",
				{
					cache: "no-store",
				}
			);

			if (!res.ok) {
				setErr(true);
				throw new Error("Failed to fetch data");
			}

			const data = await res.json();

			setData(data);
			setIsLoading(false);
		};
		getData();
	}, []);

	// console.log(data);
	const { data: session, status } = useSession();
	console.log(session);

	return <div>Dashboard</div>;
};

export default Dashboard;
