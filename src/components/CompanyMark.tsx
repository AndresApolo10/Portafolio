const companyLogos: Record<string, string> = {
  Brightn: 'brightn.svg',
  JustFund: 'justfund.svg',
  'De Una': 'deuna.svg',
  'Cruz Verde': 'cruzverde.png',
  Helper: 'helper.png',
};

export default function CompanyMark({ company }: { company: string }) {
  const logo = companyLogos[company];
  return <span className="company-mark" aria-hidden="true">{logo && <img src={`${import.meta.env.BASE_URL}images/companies/${logo}`} alt="" width="46" height="36" />}</span>;
}
