import React from 'react'
import Button from '@/components/ui/Button';

export default function page() {
  return (
    <section className="pt-56 lg:pt-48 p-6 ">
      <div className="container mx-auto">
        <div className="max-w-[1210px] h-full bg-white rounded-lg mx-auto  md:border-[0.1px] md:border-black py-6 px-8 mb-8">
          <div>
            <div className="mb-3">
              <label htmlFor="" className="font-bold">
                Name
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your name"
                className="w-full h-[56px] p-4"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="font-bold">
                Email Address
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your Address"
                className="w-full h-[56px] p-4"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="font-bold">
                Email Address
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your Address"
                className="w-full h-[56px] p-4 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="font-bold">
                Issue Type
              </label>
              <select className="w-full h-[56px] p-4 border border-gray-300 rounded">
                <option value="" disabled selected>
                  Choose an issue type
                </option>
                <option value="damaged">Damaged Product</option>
                <option value="incorrect">Incorrect Item Received</option>
                <option value="not_described">Item Not as Described</option>
                <option value="defective">Defective Product</option>
                <option value="poor_quality">Poor Quality</option>
                <option value="mismatch">Size/Color Mismatch</option>
                <option value="missing">Missing Parts</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="font-bold">
                Order Number
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Please enter the order number related to the issue"
                className="w-full h-[56px] p-4"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="font-bold">
                Product Name
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Please specify the product name if applicable"
                className="w-full h-[56px] p-4"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="font-bold">
                Description of the issue
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Please describe the issue in details"
                className="w-full h-[56px] p-4"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="font-bold">
                Preferred Resolution
              </label>
              <select className="w-full h-[56px] p-4 border border-gray-300 rounded">
                <option value="" disabled selected>
                  Choose a preferred resolution
                </option>
                <option value="damaged">Full refunds</option>
                <option value="incorrect">Replacement</option>
                <option value="not_described">Exchange</option>
                <option value="not_described">Repair</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="" className="font-bold">
                Additional Comments
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Any additional information you would like to provide"
                className="w-full h-[56px] p-4"
              />
            </div>
            <Button css={`bg-forest-green-600  w-full h-[55px] lg:mt-3`}>
              Submit
            </Button>
          </div>
        </div>
        <h2 className="font-bold text-2xl">What Happens Next?</h2>
        <p className='text-[22px]'>
          Once you submit your report, our support team will review the details
          and get back to you within 24-48 hours. We&apos;ll work closely <br /> with you to
          resolve the issue as quickly as possible.
        </p>
      </div>
    </section>
  );
}
