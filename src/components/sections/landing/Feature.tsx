import { BsRocketTakeoffFill } from 'react-icons/bs';
import { MdCategory } from 'react-icons/md';
import { FaHeadset } from 'react-icons/fa6';
import { FaExchangeAlt, FaRegCreditCard, FaPiggyBank } from 'react-icons/fa';

const features = [
  {
    icon: <BsRocketTakeoffFill className="w-4 h-4 " />,
    title: 'Start Instantly, No Account Needed',
    description: "Use the app without signing up—enjoy full flexibility whether you're online or offline.",
  },
  {
    icon: <MdCategory className="w-4 h-4 " />,
    title: 'Customizable Categories',
    description: 'Personalize your expense categories to match your budgeting style.',
  },
  {
    icon: <FaHeadset className="w-4 h-4 " />,
    title: 'Access 24/7 Customer Support',
    description: 'Our dedicated support team is available anytime to assist you with your needs.',
  },
];

const trackings = [
  {
    icon: <FaExchangeAlt className="w-4 h-4" />,
    title: 'Transactions',
    description: 'Easily record and monitor all your daily expenses, income, and transfers in one place.',
  },
  {
    icon: <FaRegCreditCard className="w-4 h-4" />,
    title: 'Subscriptions',
    description: 'Stay informed about upcoming subscription payments and avoid unexpected charges.',
  },
  {
    icon: <FaPiggyBank className="w-4 h-4" />,
    title: 'Budgets',
    description: 'Plan your finances wisely by setting clear spending limits and savings goals.',
  },
];

export default function Feature() {
  return (
    <section className="flex flex-col items-center bg-white pb-20 px-6">
      <div className="flex flex-col text-center justify-center items-center mb-4">
        <div className="w-full max-w-[320px]">
          <img src="./assets/Mockup2.png" alt="App Mockup Preview" className="w-full h-auto object-cover" loading="lazy" />
        </div>
      </div>

      {/* 1 */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 items-center w-full  gap-10 mb-8">
        <div className="flex flex-col text-start">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Let's Start Managing Your Finances Today</h1>
          <p className="text-gray-600 mb-6">Take full control of your financial activities with our advanced management features.</p>

          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-50">{feature.icon}</div>
                <div>
                  <strong className="text-gray-900 text-sm">{feature.title}</strong>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center items-center overflow-hidden ">
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-red-200 opacity-50 rounded-lg"></div>

          <img src="./assets/Mockup3.png" alt="Financial Management Feature Preview" className="relative w-[60%] h-auto object-contain max-sm:flex-none" loading="lazy" />
        </div>
      </div>

      {/* 2 */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 items-center w-full  gap-10">
        <div className="relative flex justify-center items-center ">
          <img src="./assets/finance-analysis-91.png" alt="" />
        </div>

        <div className="flex flex-col text-start">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Easily Keep Track of Your Finances</h1>
          <p className="text-gray-600 mb-6 ">Stay on top of your financial health with real-time tracking of transactions, subscriptions, and budgets.</p>

          <ul className="space-y-6">
            {trackings.map((tracking, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-50">{tracking.icon}</div>
                <div>
                  <strong className="text-gray-900 text-sm">{tracking.title}</strong>
                  <p className="text-gray-600 text-sm">{tracking.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
