import React from "react";
import { Helmet } from "react-helmet-async";
const Faq = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <Helmet>
        <title>FAQ | Gadget Heaven</title>
      </Helmet>
      <h1 className="text-4xl font-bold uppercase mb-4">frequently asked questions:-</h1>
      <div className="shadow-lg p-4 mb-12 rounded-xl">
        <h2 className="text-2xl font-medium mb-2">Orders and Shipping</h2>
        <div className="collapse rounded-none mb-2 collapse-arrow bg-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How long will it take for my order to arrive?
          </div>
          <div className="collapse-content">
            <p>
              Standard shipping takes 3-5 business days, while express shipping
              arrives in 1-2 business days. Tracking details will be emailed
              once your order is shipped.
            </p>
          </div>
        </div>
        <div className="collapse rounded-none mb-2 collapse-arrow bg-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Can I change my shipping address after placing an order?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can update the shipping address within 24 hours of order
              placement. Please contact our support team for assistance.
            </p>
          </div>
        </div>
        <div className="collapse rounded-none mb-2 collapse-arrow bg-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Do you offer international shipping?
          </div>
          <div className="collapse-content">
            <p>
              Currently, we only ship within the country. We’re working to
              expand our shipping options in the future.
            </p>
          </div>
        </div>
      </div>

      <div className="shadow-lg p-4 mb-12 rounded-xl">
        <h2 className="text-2xl font-medium mb-2">Payments and Refunds</h2>
        <div className="collapse rounded-none mb-2 collapse-arrow bg-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What payment methods do you accept?
          </div>
          <div className="collapse-content">
            <p>
              We accept credit/debit cards, PayPal, and online bank transfers.
            </p>
          </div>
        </div>
        <div className="collapse rounded-none mb-2 collapse-arrow bg-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How can I request a refund?
          </div>
          <div className="collapse-content">
            <p>
              If your item is eligible for a return, initiate a refund request
              by contacting support within 30 days of purchase. Refunds will be
              processed within 5-7 business days.
            </p>
          </div>
        </div>
        <div className="collapse rounded-none mb-2 collapse-arrow bg-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Why was my payment declined?
          </div>
          <div className="collapse-content">
            <p>
              Payment issues can occur due to incorrect card details,
              insufficient funds, or network errors. Please verify your
              information and try again.
            </p>
          </div>
        </div>
      </div>

      <div className="shadow-lg p-4 mb-12 rounded-xl">
        <h2 className="text-2xl font-medium mb-2">Technical Support</h2>
        <div className="collapse rounded-none mb-2 collapse-arrow bg-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I update the software on my gadget?
          </div>
          <div className="collapse-content">
            <p>
              Check the product manual or visit the manufacturer’s website for
              update instructions.
            </p>
          </div>
        </div>
        <div className="collapse rounded-none mb-2 collapse-arrow bg-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            My gadget isn’t working as expected; what should I do?
          </div>
          <div className="collapse-content">
            <p>
              Refer to the troubleshooting section in the product manual. If
              issues persist, contact our support team.
            </p>
          </div>
        </div>
        <div className="collapse rounded-none mb-2 collapse-arrow bg-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Can I get a replacement if my gadget is defective?
          </div>
          <div className="collapse-content">
            <p>
              Yes, if the product is within the warranty period and the issue is
              verified, we will provide a replacement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
