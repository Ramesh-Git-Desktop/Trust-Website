import Accordion from 'react-bootstrap/Accordion';

function Sidebar({ onSearchChange , searchTerm }) {
    // Lowercased search for comparison
    const search = (searchTerm || '').toLowerCase();

  // Accordion data structure
  const sidebarData = [
    {
      title: 'ITI',
      key: '0',
      items: [
        'ITI Fitter',
        'Electrical',
        'Mechanical',
        'Draughtsman (Civil/Mechanical/Architectural)',
        'Plumber',
      ],
    },
    {
      title: 'Diploma',
      key: '1',
      items: [
        'Lateral Diploma',
        'Medical / Paramedical',
        'Computer / IT',
        'Regular Fresh',
        'Mechanical',
        'Civil',
        'Electrical',
      ],
    },
    {
      title: 'B-tech',
      key: '2',
      items: [
        'Electrical',
        'Civil',
        'CS',
        'Mechanical',
      ],
    },
    {
        title:'MBA',
        key:"3",
        items:[
            'MBA General',

            'MBA Executive',

            'MBA Distance Learning',

            'MBA Online',

            'Global MBA',
        ]
    },{
        title:"MCA",
        key:"4",
        items:[
            'MCA General',

            'MCA Executive',

            'MCA Distance Learning',

            'MCA Online',

            'Global MCA',
        ]
    }

  ];

  return (
    <div className='left-navbar'>
      {/* Filter Input Section */}
      <div className='devsite-book-nav-filter-container'>
        <div className="devsite-book-nav-filter d-flex align-items-center gap-2 rounded px-2">
          <div className='d-grid justify-content-center'>
            <div className='filter-icon-1 mt-1'></div>
            <div className='filter-icon-2 mt-1'></div>
            <div className='filter-icon-3 mt-1'></div>
          </div>
          <div className=''>
             <form>
              <input
                type="search"
                placeholder="Search Here"
                className="px-2 border-0 outline-0"
                value={searchTerm} // <-- controlled input
                onChange={(e) => onSearchChange(e.target.value)}
                />

            </form>
          </div>
        </div>
      </div>

      {/* Accordion Menu */}
        <div className="devsite-mobile-nav-bottom">
            <Accordion defaultActiveKey="" alwaysOpen flush>
            <ul className="list-unstyled">

                {sidebarData.map(section => {
                // Filter section items
                const filteredItems = section.items.filter(item =>
                    item.toLowerCase().includes(search)
                );

                // If no match in this section, skip rendering
                if (filteredItems.length === 0) return null;

                return (
                    <li key={section.key}>
                    <Accordion.Item eventKey={section.key} className="border-0 bg-transparent">
                        <Accordion.Header>
                            <div className="custom-header">
                                <span>{section.title}</span>
                            </div>
                        </Accordion.Header>

                        <Accordion.Body className="p-0">
                            <ul className="list-unstyled ps-3">
                                {filteredItems.map((item, idx) => (
                               <li key={idx}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        onSearchChange(item); // <-- set searchTerm in parent (Home)
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>

                                ))}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    </li>
                );
                })}

            </ul>
            </Accordion>
        </div>
    </div>
  );
}

export default Sidebar;
