import WorkItem from "./WorkItem";

const data = [
  {
    company: "Aeroterra",
    country: "Argentina",
    year: "february 2024/actual job",
    title: "Accounting Functions Analyst",
    duration: "until now",
    details:
      "Located within the technology sector, the company provides Data-Science consulting and geospatial information services to top-tier companies such as Techint, Siderca, and Pampa Energía. As an Accounting Functions Analyst in the IT field, the role focuses on task automation and business knowledge to develop as a Functional Analyst within the company. The job includes supporting the administrative area and creating solutions to streamline processes.",
  },
  {
    company: "UADE",
    country: "Argentina",
    year: "august 2023/january 2024",
    title: "Mailing Management",
    duration: "6 months",
    details:
      "As one of the most renowned universities, our work was extremely dynamic. As a team, we were responsible not only for managing and carrying out informative mailing campaigns using HTML, CSS and Javascript, but also for participating in brainstorming sessions for student retention through activities that involved and incentivized their participation, such as sports tournaments, talks with specialists and professionals, environmental activities, and cultural events like museum nights, among others. Although the period was an internship, the practices carried out served to continue forging knowledge and further professionalizing myself in the IT world.",
  },
  {
    company: "99minutos",
    country: "México",
    year: "march 2022/july 2023",
    title: "Front-end Developer",
    duration: "1.5 years",
    details:
      "The company is located in the logistics area for leading brands such as Mercadolibre and Walmart, among others. As a front-end developer, I have participated in the refactoring of the company‘s website and app code, with the aim of achieving a homogeneous image and clean, easy-to-understand code. During this project, I updated the existing VanillaJS code to ReactJS and applied NextJS to use it with the MaterialUI library. After completing this project, we decided to refactor the internal HR website, where I applied Typescript to detect errors in a timely manner. As a team, we also provided online customer support to maintain a competitive quality service, especially during high-demand events such as Black Friday and Hot Sale",
  },
  {
    company: "Banco de la Nación Argentina",
    country: "Argentina",
    year: "march 2018/february 2022",
    title: "Credit Risk Analyst",
    duration: "4 years",
    details:
      "Thanks to my background as a Public Accountant, I was later promoted to the Credit Risk Department, where I analyzed the financial statements and reports of each client company and applied principles of statistics and economics to formulate effective financial solutions. This enabled us to secure high-quality business deals for the firm",
  },
  {
    company: "Banco de la Nación Argentina",
    country: "Argentina",
    year: "april 2012/february 2018",
    title: "Customer service",
    duration: "6 years",
    details:
      "In my initial role in customer service, I gained a comprehensive understanding of the banking sector in branch offices, honed my teamwork skills, and developed a keen sense for identifying clients needs.",
  },
];

export default function Work() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-4 pb-28">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-12">
        Work
      </h1>
      {data.map((item, idx) => {
        return (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        );
      })}
    </div>
  );
}
