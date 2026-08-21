export type StoreProduct = {
  slug: string;
  name: string;
  dosage: string;
  price: string;
  image: string;
  highlights: string[];
  description: string;
  details: string[];
  /**
   * Server-enforced commerce switch. Keep false until the business has
   * confirmed this specific item is authorized for direct online sale.
   */
  checkoutEligible: boolean;
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
    checkoutEligible: false,
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
    checkoutEligible: false,
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
    checkoutEligible: false,
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
    checkoutEligible: false,
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
    checkoutEligible: false,
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
    checkoutEligible: false,
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
    checkoutEligible: false,
  },
];

export const faqs = [
  {
    q: "Where can I see product details?",
    a: "Tap any product to see the available size and price."
  },
  {
    q: "How long does order processing take?",
    a: "Orders are generally processed within 1 to 3 business days unless a different timeframe is provided during checkout or elsewhere on the site.",
  },
  {
    q: "Will tracking information be sent?",
    a: "If tracking is available for the shipment, tracking details may be sent by email after the order has been prepared and shipped.",
  },
  {
    q: "Can a shipping address be changed after ordering?",
    a: "Address changes may be requested before an order enters fulfillment. Once processing or shipment preparation begins, changes may no longer be possible.",
  },
  {
    q: "What if an order arrives damaged or incomplete?",
    a: "Please contact support within 48 hours of delivery and include the order details along with any requested photos so the issue can be reviewed.",
  },
  {
    q: "Are refunds or replacements available?",
    a: "Approved order issues may be addressed with a replacement, store credit, partial credit, refund, or another appropriate resolution depending on the situation.",
  },
];

export const testimonials = [];
