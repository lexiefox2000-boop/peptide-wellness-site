export type StoreProduct = {
  slug: string;
  name: string;
  dosage: string;
  price: string;
  image: string;
  highlights: string[];
  description: string;
  details: string[];
};

export const products: StoreProduct[] = [
  {
    slug: "tirzepatide-10mg",
    name: "Tirzepatide 10mg",
    dosage: "10mg vial",
    price: "$100",
    image: "/products/tirz10mg.png",
    highlights: [],
    description: "",
    details: [],
  },
  {
    slug: "tirzepatide-40mg",
    name: "Tirzepatide 40mg",
    dosage: "40mg vial",
    price: "$300",
    image: "/products/tirz40mg.png",
    highlights: [],
    description: "",
    details: [],
  },
  {
    slug: "retatrutide-10mg",
    name: "Retatrutide 10mg",
    dosage: "10mg vial",
    price: "$150",
    image: "/products/reta10mg.png",
    highlights: [],
    description: "",
    details: [],
  },
  {
    slug: "retatrutide-40mg",
    name: "Retatrutide 40mg",
    dosage: "40mg vial",
    price: "$450",
    image: "/products/reta40mg.png",
    highlights: [],
    description: "",
    details: [],
  },
  {
    slug: "sermorelin-10mg",
    name: "Sermorelin 10mg",
    dosage: "10mg vial",
    price: "$100",
    image: "/products/semorelin10mg.png",
    highlights: [],
    description: "",
    details: [],
  },
  {
    slug: "ghk-cu-100mg",
    name: "GHK-CU 100mg",
    dosage: "100mg vial",
    price: "$100",
    image: "/products/ghkcu100mg.png",
    highlights: [],
    description: "",
    details: [],
  },
  {
    slug: "nad-500mg",
    name: "NAD+ 500mg",
    dosage: "500mg vial",
    price: "$40",
    image: "/products/NAD500MG.png",
    highlights: [],
    description: "",
    details: [],
  },
];

export const faqs = [
  {
    q: "Where can I see product details?",
    a: "Tap any product to see the available size, price, and current product information.",
  },
  {
    q: "How can I pay?",
    a: "Checkout is currently available with Bitcoin through our secure payment provider.",
  },
  {
    q: "How long does order processing take?",
    a: "Orders are generally processed within 1 to 3 business days unless a different timeframe is shown during checkout or elsewhere on the site.",
  },
  {
    q: "Will I receive tracking information?",
    a: "If tracking is available for your shipment, tracking details may be sent after the order has been prepared and shipped.",
  },
  {
    q: "Can I change my shipping address after ordering?",
    a: "Please double-check your shipping details before placing an order. Once fulfillment begins, address changes may no longer be possible.",
  },
  {
    q: "What if there is an issue with my order?",
    a: "Keep your order number, delivery details, and any relevant photos. For help with an order, visit the Contact page to chat with us on Telegram.",
  },
  {
    q: "Are refunds or replacements available?",
    a: "Approved order issues may be addressed with a replacement, store credit, partial credit, refund, or another appropriate resolution depending on the situation.",
  },
];

export const testimonials = [];
