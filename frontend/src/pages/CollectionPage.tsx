import { useEffect, useRef, useState } from "react";
import ProductGrid from "../components/products/ProductGrid";
import { FaFilter } from "react-icons/fa6";
import FilterSidebar from "../components/products/FilterSidebar";
import SortOptions from "../components/products/SortOptions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProducts } from "../redux/slices/productsSlice";

const CollectionPage = () => {
	const dispatch = useAppDispatch();
	const { products, loading, error } = useAppSelector(
		(state) => state.products
	);

	const sidebarRef = useRef<HTMLDivElement | null>(null);
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const handleClickOutside = (e: MouseEvent) => {
		// close sidebar if clicked outside
		if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
			setIsSidebarOpen(false);
		}
	};

	useEffect(() => {
		// add event listener for clicks
		document.addEventListener("mousedown", handleClickOutside);
		// clean event listener on unmount
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="flex flex-col lg:flex-row">
			{/* Mobile filter button */}
			<button
				onClick={toggleSidebar}
				className="lg:hidden border border-gray-200 p-2 flex justify-center items-center"
			>
				<FaFilter className="mr-2" /> Filters
			</button>
			{/* Filter sidebar */}
			<div
				ref={sidebarRef}
				className={`${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 
                lg:static lg:translate-x-0`}
			>
				<FilterSidebar />
			</div>
			<div className="grow p-4">
				<h2 className="text-2xl uppercase mb-4">All Collection</h2>
				{/* Sort options */}
				<SortOptions />
				{/* Product Grid */}
				<ProductGrid products={products} loading={loading} error={error} />
			</div>
		</div>
	);
};

export default CollectionPage;
