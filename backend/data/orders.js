const orders = [
    {
        shippingCost: 9000,
        shippingDuration: "2 days",
        shippingCourier: "tiki",
        shippingMethod: "Reguler",
        shippingDetails: {
            name: "Admin User",
            address: "123 Admin Street",
            city: "Jakarta",
            postalCode: "10310",
            phone: "123456789012",
        },
        paymentMethod: "BankTransfer",
        totalPrice: 118000,
        isPaid: false,
        isDelivered: false,

        status: "processing",
        paymentProof: {
            publicId: "aclo/dev/payments/cpyhnyf5wkirbywngjpl",
            uploadedAt: new Date(),
            status: "accepted",
            note: "",
        },
    },
];

module.exports = orders;
