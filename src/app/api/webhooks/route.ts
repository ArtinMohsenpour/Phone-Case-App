import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = headers().get("stripe-signature");

    if (!signature) {
      return new Response("Invalid signature", { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(body, signature, ___);
  } catch (err) {}
}
