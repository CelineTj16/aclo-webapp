const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const ProductVariant = require("./models/ProductVariant");
const User = require("./models/User");
const Cart = require("./models/Cart");
const Order = require("./models/Order");
const Review = require("./models/Review");
const products = require("./data/products");
const productVariants = require("./data/productVariants");
const reviews = require("./data/reviews");
const orders = require("./data/orders");

dotenv.config();

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// function to seed data
const seedData = async () => {
	try {
		// clear existing data
		await Product.deleteMany();
		await ProductVariant.deleteMany();
		await User.deleteMany();
		await Cart.deleteMany();
		await Review.deleteMany();
		await Order.deleteMany();

		// create default admin user
		const createdUser = await User.create({
			name: "Admin User",
			email: "admin@example.com",
			password: "123456",
			role: "admin",
		});

		// assign default user ID to each product
		const userID = createdUser._id;
		const sampleProducts = products.map((product) => {
			return { ...product, user: userID };
		});
		// Insert Products
		const insertedProducts = await Product.insertMany(sampleProducts);

		// Grab all the products
		const findByContains = (products, keyword) =>
			products.find((p) =>
				p.name?.toLowerCase().includes(keyword.toLowerCase())
			);

		const stork = findByContains(insertedProducts, "stork");
		const falcon = findByContains(insertedProducts, "falcon");
		const talon = findByContains(insertedProducts, "talon");
		const quill = findByContains(insertedProducts, "kitchen utensils");
		const quillMittens = findByContains(insertedProducts, "oven mitt");
		const sparrow = findByContains(insertedProducts, "sparrow");
		const beak = findByContains(insertedProducts, "beak");

		if (
			!stork ||
			!falcon ||
			!talon ||
			!quill ||
			!quillMittens ||
			!sparrow ||
			!beak
		) {
			throw new Error(
				"One or more products not found by name. Check your seed product names exactly."
			);
		}

		// Inject addOnProducts into STORK and FALCON with TALON add-on
		// Inject addOnProducts into QUILL with Oven mitten add-on
		// With: Correct variant option & bundle pricing discount
		const talonAddOnForStork = {
			productId: talon._id,
			options: { variant: "Stork" },
			pricing: {
				discountType: "fixed",
				amount: 100000,
			},
		};

		const talonAddOnForFalcon = {
			productId: talon._id,
			options: { variant: "Falcon" },
			pricing: {
				discountType: "fixed",
				amount: 100000,
			},
		};

		const mittensAddOnForQuill = {
			productId: quillMittens._id,
			pricing: {
				discountType: "none",
				amount: 0,
			},
		};

		await Product.updateOne(
			{ _id: stork._id },
			{
				$set: {
					addOnProducts: [talonAddOnForStork],
				},
			}
		);
		await Product.updateOne(
			{ _id: falcon._id },
			{
				$set: {
					addOnProducts: [talonAddOnForFalcon],
				},
			}
		);
		await Product.updateOne(
			{ _id: quill._id },
			{
				$set: {
					addOnProducts: [mittensAddOnForQuill],
				},
			}
		);

		// Insert productId mappings for all Product Variants
		const variantsWithProductId = productVariants.map((variant) => {
			const sku = variant.sku;
			if (sku === "QL-MT") {
				return {
					...variant,
					productId: quillMittens._id,
				};
			}
			if (sku === "QL-UT") {
				return {
					...variant,
					productId: quill._id,
				};
			}
			if (sku.startsWith("ST-")) {
				return {
					...variant,
					productId: stork._id,
				};
			}
			if (sku.startsWith("FL-")) {
				return {
					...variant,
					productId: falcon._id,
				};
			}
			if (sku.startsWith("TA-")) {
				return {
					...variant,
					productId: talon._id,
				};
			}
			if (sku.startsWith("SP-")) {
				return {
					...variant,
					productId: sparrow._id,
				};
			}
			if (sku === "BE") {
				return {
					...variant,
					productId: beak._id,
				};
			}
		});

		const insertedVariants = await ProductVariant.insertMany(
			variantsWithProductId
		);

		// Retrieve the first product & it's variant and create a sample Order with it
		const p0 = insertedProducts[0];
		const p0Variant = insertedVariants.find(
			(pv) => pv.productId.toString() === p0._id.toString()
		);
		const sampleOrders = orders.map((order) => {
			return {
				...order,
				user: userID,
				orderItems: [
					{
						productId: p0._id,
						name: p0.name,
						image: p0Variant.images?.[0]?.url || "",
						price: p0Variant.discountPrice ?? p0Variant.price,
						quantity: 1,
					},
				],
			};
		});

		// Insert add on products for the right products

		await Review.insertMany(reviews);
		await Order.insertMany(sampleOrders);

		console.log("Mock data seeded successfully");
		process.exit();
	} catch (error) {
		console.error("Error seeding the data: ", error);
		process.exit(1);
	}
};

seedData();
