import { CompanyInfo, ServiceItem, ProjectItem, BlogPost, FaqItem } from '../types';

export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80';

export const COMPANY: CompanyInfo = {
  name: 'MACLOCK ASSOCIATES LTD',
  tagline: 'BUILDING YOUR VISION.',
  supportingStatement: 'Thoughtful design, professional construction and carefully managed project delivery.',
  address: '9 Okeah Street, Port Harcourt, Rivers State, Nigeria',
  street: '9 Okeah Street',
  city: 'Port Harcourt',
  state: 'Rivers State',
  country: 'Nigeria',
  phone: '+234 803 338 9930',
  phoneRaw: '+2348033389930',
  hours: 'Monday – Friday: 8:00 AM – 5:00 PM, Saturday: By Appointment',
};

export const PRINCIPLES = [
  {
    id: '01',
    title: 'PROFESSIONAL APPROACH',
    description: 'A structured and considered approach to every project, ensuring rigour in technical documentation, safety, and operational standards.',
  },
  {
    id: '02',
    title: 'ATTENTION TO DETAIL',
    description: 'Careful consideration of materials, finishes and execution at every structural and aesthetic junction.',
  },
  {
    id: '03',
    title: 'PROJECT COORDINATION',
    description: 'Clear organisation and coordination throughout the project lifecycle, aligning specialists, trades, and site supervisors seamlessly.',
  },
  {
    id: '04',
    title: 'CLIENT-CENTRIC DELIVERY',
    description: 'Solutions developed around the client’s needs, objectives and expectations, maintained with proactive communication.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    name: 'DISCOVER',
    description: 'Understand the client’s objectives, site conditions, requirements and overall project vision.',
  },
  {
    number: '02',
    name: 'PLAN',
    description: 'Establish the appropriate direction, scope, procurement logistics and initial project considerations.',
  },
  {
    number: '03',
    name: 'DESIGN',
    description: 'Develop thoughtful design solutions, technical drawings, and structural specifications around requirements.',
  },
  {
    number: '04',
    name: 'EXECUTE',
    description: 'Coordinate construction and physical implementation with strict oversight on quality, safety, and schedule.',
  },
  {
    number: '05',
    name: 'REFINE',
    description: 'Review details, material finishes, and craftsmanship to ensure the project meets the intended benchmark.',
  },
  {
    number: '06',
    name: 'HANDOVER',
    description: 'Complete inspection protocols, finalize documentation, and deliver the completed space to the client.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'building-construction',
    number: '01',
    title: 'BUILDING CONSTRUCTION',
    shortDescription: 'Professional construction solutions for residential and commercial developments.',
    fullDescription:
      'MACLOCK ASSOCIATES LTD delivers robust structural construction, civil engineering coordination, and precision building execution across residential developments and commercial facilities in Port Harcourt and across Rivers State. We bring technical vigilance, skilled trades coordination, and strict material inspection to ensure structural integrity and enduring craftsmanship.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    deliverables: [
      'Substructure & reinforced concrete works',
      'Structural frame assembly & masonry construction',
      'Civil engineering & site drainage infrastructure',
      'Roofing systems & structural envelope sealing',
      'Subcontractor coordination & site safety enforcement',
    ],
    approach:
      'Every construction phase is governed by methodical quality checkpoints. We focus on soil evaluation, material validation (reinforcement bars, concrete batching, block strength), and site management to prevent common construction defects.',
    keyPhases: ['Site Preparation & Excavation', 'Foundation & Structural Framing', 'Superstructure & Enclosure', 'MEP Integration', 'Finishes & Quality Audit'],
  },
  {
    id: 'architectural-design',
    number: '02',
    title: 'ARCHITECTURAL DESIGN',
    shortDescription: 'Thoughtful architectural planning and design solutions tailored to project requirements.',
    fullDescription:
      'We craft architectural spaces tailored to the specific environmental, spatial, and contextual demands of modern Nigerian living and commerce. From climatic consideration of tropical sunlight and cross-ventilation in the Niger Delta to bold volumetric aesthetics, our design team produces considered spatial drawings, elevations, and 3D visualisations.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    deliverables: [
      'Concept spatial development & programmatic planning',
      'Detailed architectural working drawings & specifications',
      'Climatic design integration for tropical environments',
      '3D architectural modelling & photorealistic visualisations',
      'Planning authority submission documentation',
    ],
    approach:
      'We balance aesthetic distinction with functional practicalities. Our spatial configurations respond to light, airflow, privacy, and long-term maintenance in coastal and tropical climates.',
    keyPhases: ['Brief Formulation & Site Analysis', 'Schematic Concept Design', 'Design Development', 'Construction Documentation', 'Statutory Approvals Support'],
  },
  {
    id: 'project-management',
    number: '03',
    title: 'PROJECT MANAGEMENT',
    shortDescription: 'Structured coordination and oversight throughout the project lifecycle.',
    fullDescription:
      'Complex building projects demand uncompromising oversight. MACLOCK ASSOCIATES LTD provides rigorous project management services that harmonize budgets, construction schedules, contractor workflows, and quality governance from initial inception through final handover.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    deliverables: [
      'Comprehensive master schedule planning & critical path tracking',
      'Resource & material procurement management',
      'Contractor supervision & milestone verification',
      'Budget monitoring & risk mitigation strategies',
      'Periodic progress reporting & documentation',
    ],
    approach:
      'Through structured communication and proactive risk management, we minimize delays, curb unforeseen expenditure, and provide owners with clarity at every phase.',
    keyPhases: ['Project Charter & Scope Baseline', 'Procurement Strategy', 'Site Operations Oversight', 'Budget & Schedule Audits', 'Commissioning & Closeout'],
  },
  {
    id: 'interior-design',
    number: '04',
    title: 'INTERIOR DESIGN',
    shortDescription: 'Interior solutions that balance functionality, aesthetics and quality.',
    fullDescription:
      'Our interior design service bridges architecture and intimate spatial experience. We design bespoke interiors for high-end residences, corporate headquarters, and retail spaces that prioritize durable materials, refined lighting palettes, bespoke millwork, and ergonomic flow.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    deliverables: [
      'Space planning, zoning & circulation layout',
      'Custom cabinetry, millwork & architectural joinery design',
      'Lighting schemes & acoustic treatment planning',
      'Material specification: stones, ceramics, hardwoods, metals',
      'Turnkey interior fit-out oversight',
    ],
    approach:
      'We create interiors that endure. By selecting authentic materials that age gracefully in our climate and integrating thoughtful concealed lighting, we craft environments of understated luxury.',
    keyPhases: ['Spatial Concept & Moodboards', 'Layout & Joinery Detailing', 'Material & Fixture Schedule', 'On-Site Fit-out Supervision', 'Final Styling & Handover'],
  },
  {
    id: 'renovation-remodelling',
    number: '05',
    title: 'RENOVATION & REMODELLING',
    shortDescription: 'Transformation and improvement of existing spaces.',
    fullDescription:
      'Breathing new vitality into mature structures requires deep structural diagnostic skill and sensitive aesthetic vision. MACLOCK ASSOCIATES LTD handles selective structural remodelling, facade upgrades, spatial reconfigurations, and MEP overhauls to modernize existing properties.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    deliverables: [
      'Structural condition assessment & load-bearing evaluations',
      'Facade modernisations & building envelope revitalisation',
      'Spatial reconfiguration & open-plan conversions',
      'Full mechanical, electrical & plumbing replacements',
      'Modern finishes upgrade & thermal performance improvement',
    ],
    approach:
      'We treat existing structures with surgical precision—identifying hidden issues early, preserving viable structural elements, and seamlessly marrying modern architectural standards with sound bones.',
    keyPhases: ['Diagnostic Structural Survey', 'Feasibility & Reconfiguration Design', 'Demolition & Structural Reinforcement', 'Modern Installations', 'Refinement & Commissioning'],
  },
  {
    id: 'construction-consultancy',
    number: '06',
    title: 'CONSTRUCTION CONSULTANCY',
    shortDescription: 'Professional guidance to help clients plan and execute construction projects effectively.',
    fullDescription:
      'Before committing substantial capital to land development or building projects, property owners, diaspora investors, and institutions require impartial, professional counsel. Our consultancy covers feasibility assessments, buildability reviews, bill of quantities (BOQ) validation, and contractor assessment.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    deliverables: [
      'Site feasibility & buildability assessments',
      'Bill of Quantities (BOQ) review & value engineering guidance',
      'Contractor evaluation & procurement advisory',
      'Quality compliance inspections & technical audits',
      'Pre-construction advisory for private & commercial owners',
    ],
    approach:
      'We act as your independent technical advocate. Our advice is grounded in pragmatic construction knowledge, Port Harcourt site realities, and transparent cost realities.',
    keyPhases: ['Initial Advisory Brief', 'Technical Due Diligence', 'Value Engineering & Feasibility Report', 'Procurement Strategy Formulation', 'Owner Advisory Support'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'waterfront-residence-concept',
    title: 'The Port Harcourt Waterfront Residence Concept',
    category: 'Residential',
    location: 'Port Harcourt, Rivers State',
    status: 'Studio Showcase',
    scope: 'Architectural Design & Structural Engineering Framework',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    ],
    overview:
      'A contemporary coastal villa design developed as a studio showcase responding to waterfront sites in the Port Harcourt region. The design incorporates cantilevered concrete slabs, deep shade overhangs to deflect intense tropical afternoon sun, and expansive glazed openings that capture cooling cross-breezes.',
    brief:
      'To demonstrate how luxury residential architecture in Rivers State can unite bold modern geometry with climate-resilient engineering, high-durability external finishes, and fluid indoor-outdoor living.',
    approach:
      'MACLOCK approached the concept by utilizing reinforced concrete post-and-beam construction with corrosion-resistant waterproofing treatments suited for marine coastal atmospheres. Large overhangs protect expansive low-E glazing from tropical driving rain while maximizing natural illumination.',
    workScope: [
      'Climatic site orientation study',
      'Architectural master design & elevations',
      'Structural slab & cantilever calculations',
      'External envelope & corrosion-resistant specification',
      'Bespoke interior circulation planning',
    ],
    featured: true,
  },
  {
    id: 'trans-amadi-commercial-hub',
    title: 'Trans-Amadi Commercial & Technical Hub',
    category: 'Commercial',
    location: 'Trans-Amadi, Port Harcourt, Rivers State',
    status: 'Studio Showcase',
    scope: 'Commercial Facility Design & Construction Methodology',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80',
    ],
    overview:
      'A multi-functional commercial and operations facility planned for the bustling industrial corridor of Trans-Amadi. The design emphasizes structural durability, modular warehouse integration, and an executive administration wing.',
    brief:
      'Develop a high-efficiency commercial building scheme capable of enduring rigorous industrial vehicular logistics while maintaining a refined executive corporate front.',
    approach:
      'Employing heavy-duty industrial reinforced concrete flooring, durable steel trussing, and double-height curtain walling for the front office volume to balance industrial utility with architectural prestige.',
    workScope: [
      'Heavy-duty foundation design for industrial loading',
      'Structural steel framework planning',
      'Administrative office zoning & acoustic separation',
      'Site circulation for heavy logistics vehicles',
    ],
    featured: true,
  },
  {
    id: 'gra-phase-contemporary-duplex',
    title: 'GRA Phase Contemporary Duplex Concept',
    category: 'Residential',
    location: 'GRA, Port Harcourt, Rivers State',
    status: 'Studio Showcase',
    scope: 'Turnkey Residential Architecture & Interior Planning',
    heroImage: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    ],
    overview:
      'A private residential duplex concept conceived for the prestigious Government Reserved Area (GRA) in Port Harcourt. Featuring monolithic stone cladding, warm timber screening, and a serene courtyard swimming pool.',
    brief:
      'A family compound layout that provides maximum internal security and acoustic tranquility while remaining light-filled and visually connected to lush private landscape features.',
    approach:
      'Careful massing created an inward-focused perimeter that opens generously to an internal pool courtyard, shielding private quarters from street noise while celebrating high-ceilinged open entertainment spaces.',
    workScope: [
      'Monolithic facade detailing & exterior stone cladding',
      'Private security perimeter & courtyard integration',
      'Thermal insulation and roof ventilation strategy',
      'Custom interior millwork & lighting design',
    ],
    featured: true,
  },
  {
    id: 'woji-modern-terrace-residences',
    title: 'Woji Modern Terrace Residences',
    category: 'Construction',
    location: 'Woji, Port Harcourt, Rivers State',
    status: 'Studio Showcase',
    scope: 'Multi-Unit Residential Construction Planning',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=80',
    ],
    overview:
      'An efficient four-unit luxury terrace development model designed to optimize urban land utilization without compromising on private parking, green spaces, or privacy.',
    brief:
      'Demonstrate cost-effective, high-finish multi-residential construction methods tailored to growing suburban enclaves in Port Harcourt.',
    approach:
      'Standardized structural grids and coordinated mechanical risers allow for accelerated construction timelines and lower material wastage without sacrificing architectural elegance.',
    workScope: [
      'Substructure optimization for clay-sand Niger Delta soils',
      'Standardized formwork & pre-cast lintel systems',
      'Shared service infrastructure & independent drainage lines',
      'Turnkey facade finishes & boundary landscaping',
    ],
    featured: false,
  },
  {
    id: 'executive-corporate-interior-transformation',
    title: 'Executive Corporate Headquarters Interior',
    category: 'Interior',
    location: 'Port Harcourt, Rivers State',
    status: 'Studio Showcase',
    scope: 'Interior Architectural Design & Bespoke Joinery',
    heroImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
    ],
    overview:
      'An executive workspace interior concept incorporating fluted oak panels, acoustic ceiling baffles, recessed warm architectural lighting, and seamless audiovisual integration.',
    brief:
      'Craft an authoritative boardroom and executive suite environment reflecting corporate stability, discretion, and contemporary refinement.',
    approach:
      'Using a neutral palette of warm stone, smoked timber, and bronze metallic accents to foster an atmosphere of quiet productivity and executive stature.',
    workScope: [
      'Acoustic wall paneling & ceiling integration',
      'Custom boardroom table & integrated connectivity hubs',
      'Architectural lighting scenes & hidden LED channels',
      'Ergonomic spatial planning & executive lounge zoning',
    ],
    featured: false,
  },
  {
    id: 'old-gra-villa-remodelling',
    title: 'Old GRA Classical Villa Remodelling',
    category: 'Renovation',
    location: 'Old GRA, Port Harcourt, Rivers State',
    status: 'Studio Showcase',
    scope: 'Structural Renovation & Facade Modernisation',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=80',
    ],
    overview:
      'A transformation scheme for a traditional 1980s property in Old GRA, stripping away cumbersome partition walls to create an airy open-plan layout with updated rooflines and expanded fenestration.',
    brief:
      'Re-engineer an existing residential structure into a 21st-century home while preserving foundation integrity and lowering long-term maintenance costs.',
    approach:
      'Inserting steel structural lintels to safely remove non-loadbearing compartmental walls, upgrading all plumbing and electrical circuits, and replacing aging timber windows with thermally broken aluminum units.',
    workScope: [
      'Non-destructive structural survey & load redistribution',
      'Facade replastering & contemporary parapet construction',
      'Full electrical conduit re-piping & switchgear upgrades',
      'Modern open-concept living, dining, and kitchen integration',
    ],
    featured: false,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'considerations-before-starting-construction',
    title: 'What to Consider Before Starting a Construction Project in Rivers State',
    category: 'Construction',
    date: 'February 2026',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    excerpt:
      'From soil testing in the Niger Delta basin to verified statutory permits, planning thoroughly before the first spade strikes earth prevents costly delays.',
    content: [
      'Embarking on a construction project is one of the most substantial capital investments an individual or organization will undertake. In Port Harcourt and the greater Rivers State region, unique hydrological and topographical conditions necessitate methodical pre-construction preparation.',
      '1. Rigorous Soil Investigation: The soils across Port Harcourt vary significantly—from firm laterite in upland zones to high water-table clay in low-lying areas. Commissioning a geotechnical soil test ensures the foundation type (whether raft, strip with ground beams, or piled) is scientifically matched to site geology, eliminating differential settlement.',
      '2. Statutory Approval & Town Planning Documentation: Before mobilizing equipment, ensure architectural, structural, and mechanical drawings are submitted and approved by relevant planning authorities. Proceeding without regulatory permits risks work-stop orders and costly retrofits.',
      '3. Realistic Bill of Quantities (BOQ): Work with professional estimators to prepare a transparent BOQ. Factor in local material supply chain realities and establish contingency reserves for price fluctuations in key inputs like cement and steel reinforcement.',
      '4. Clear Contractual Roles: Whether utilizing design-and-build or traditional general contracting, defined lines of communication between client, project manager, and site supervisor are vital to keeping projects on track.',
    ],
    tags: ['Planning', 'Site Analysis', 'Port Harcourt', 'Foundations', 'Best Practices'],
  },
  {
    id: 'proper-project-planning-reduces-problems',
    title: 'How Proper Project Planning Reduces Construction Problems',
    category: 'Project Management',
    date: 'January 2026',
    readTime: '5 min read',
    featuredImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    excerpt:
      'Most construction failures stem not from materials, but from premature starts without coordinated architectural and engineering alignment.',
    content: [
      'In the construction industry, it is widely acknowledged that an hour spent resolving a clash during the design phase saves days of physical rework on site. When drawings are rushed, conflicts between plumbing stacks, air conditioning ducts, and structural beams inevitably emerge during execution.',
      'Structured project planning establishes critical milestones: procurement timelines, material lead times, and testing intervals. At MACLOCK ASSOCIATES LTD, our project management philosophy emphasizes detailed pre-construction coordination.',
      'By aligning all stakeholders around verified schedules and transparent deliverables, risk is managed proactively rather than reactively.',
    ],
    tags: ['Management', 'Coordination', 'Efficiency', 'Risk Mitigation'],
  },
  {
    id: 'choosing-right-construction-approach',
    title: 'Choosing the Right Construction Approach for Your Project',
    category: 'Construction',
    date: 'December 2025',
    readTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    excerpt:
      'Examining Design-Bid-Build versus Integrated Design & Build procurement methods for private and commercial investors.',
    content: [
      'Selecting how your project will be designed and built is as consequential as choosing the materials. The traditional approach—hiring independent designers then tendering out to contractors—can foster fragmented responsibility if unforeseen site anomalies occur.',
      'An integrated approach, in contrast, creates a singular point of accountability. When designers and builders collaborate under coordinated leadership, constructability reviews happen concurrently with schematic sketches, preventing designs that look stunning on paper but prove impractical or exorbitant to construct.',
      'Understanding your tolerance for schedule risk, budget certainty, and hands-on involvement helps determine the ideal project structure.',
    ],
    tags: ['Procurement', 'Contracts', 'Commercial', 'Residential'],
  },
  {
    id: 'key-considerations-when-renovating',
    title: 'Key Considerations When Renovating an Existing Property',
    category: 'Renovation',
    date: 'November 2025',
    readTime: '5 min read',
    featuredImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    excerpt:
      'Renovating mature properties requires structural diagnostic insight, moisture assessment, and methodical services modernization.',
    content: [
      'Renovation is often faster and more environmentally sustainable than total demolition, yet it carries unique risks. Older structures in coastal or humid environments frequently conceal moisture ingress, corroded rebar within spalling concrete, or outdated electrical wiring.',
      'Before beginning cosmetic improvements like painting or tiling, conduct a non-destructive structural audit. Ensure all damp-proof courses (DPC) are intact and inspect lintels above openings intended for expansion.',
      'Prioritize envelope integrity: a modernized interior is only as secure as the roof waterproofing and external plastering that protects it.',
    ],
    tags: ['Renovation', 'Modernisation', 'Structure', 'Maintenance'],
  },
  {
    id: 'importance-of-quality-materials',
    title: 'The Importance of Quality Materials in Construction',
    category: 'Construction',
    date: 'October 2025',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    excerpt:
      'Why compromising on concrete aggregate grading, steel tensile strength, or waterproofing membranes compromises building longevity.',
    content: [
      'The true cost of construction is measured across the full lifespan of a building. Choosing substandard cement-to-aggregate ratios or unverified reinforcement steel might yield short-term budgetary savings, but inevitably manifests as cracked walls, sagging lintels, and relentless water seepage within years.',
      'At MACLOCK ASSOCIATES LTD, we emphasize the rigorous verification of raw building materials. Batch testing concrete cubes, sourcing certified high-tensile steel, and utilizing industrial-grade elastomeric waterproofing membranes ensure that buildings remain structurally sound and visually immaculate for generations.',
    ],
    tags: ['Quality', 'Materials', 'Durability', 'Engineering Standards'],
  },
  {
    id: 'tropical-architecture-niger-delta',
    title: 'Designing for Climate: Tropical Architecture in the Niger Delta',
    category: 'Architecture',
    date: 'September 2025',
    readTime: '5 min read',
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    excerpt:
      'Harnessing passive cooling, deep overhangs, and corrosion-resistant finishes to create sustainable luxury in southern Nigeria.',
    content: [
      'Port Harcourt experiences high precipitation, elevated humidity, and intense equatorial solar exposure. Architecture that blindly replicates temperate European glass-box designs results in staggering cooling bills and rapid facade deterioration.',
      'Contextual tropical architecture employs generous roof overhangs to shield external walls from monsoon rains and high-angle solar radiation. Cross-ventilation pathways reduce reliance on continuous air conditioning, while breathable, mineral-based external wall coatings resist mildew and algae formation.',
    ],
    tags: ['Architecture', 'Climate Design', 'Sustainability', 'Port Harcourt'],
  },
];

export const FAQS: FaqItem[] = [
  {
    id: '1',
    category: 'General',
    question: 'What types of projects does MACLOCK ASSOCIATES LTD handle?',
    answer:
      'MACLOCK ASSOCIATES LTD provides comprehensive solutions across residential building construction, commercial developments, architectural planning and design, project management, turnkey interior design, renovation and remodelling, and construction consultancy.',
  },
  {
    id: '2',
    category: 'Location & Operations',
    question: 'Where is MACLOCK ASSOCIATES LTD located?',
    answer:
      'Our office is located at 9 Okeah Street, Port Harcourt, Rivers State, Nigeria. We serve clients within Port Harcourt, throughout Rivers State, and across the broader region.',
  },
  {
    id: '3',
    category: 'Consultation & Process',
    question: 'How do I begin a project with MACLOCK ASSOCIATES LTD?',
    answer:
      'You can initiate your project by using our online consultation request form, calling our office directly at +234 803 338 9930, or reaching out to schedule an in-person meeting at 9 Okeah Street, Port Harcourt. We begin with a discovery dialogue to understand your objectives and project parameters.',
  },
  {
    id: '4',
    category: 'Consultation & Process',
    question: 'Can I request a consultation before finalizing my architectural plans?',
    answer:
      'Yes. In fact, engaging us early during the conceptual or pre-design phase allows us to provide constructability advice, site analysis, and realistic cost guidance before drawings are finalized.',
  },
  {
    id: '5',
    category: 'Services & Scope',
    question: 'What information should I provide before discussing my project?',
    answer:
      'Helpful details include your project type (residential, commercial, renovation), site location (if land has been acquired), site dimensions or survey plans, desired timeline, scope of services required, and any architectural sketches or reference imagery you have gathered.',
  },
  {
    id: '6',
    category: 'Services & Scope',
    question: 'Do you handle property renovations and remodelling?',
    answer:
      'Yes. We handle structural remodelling, modern facade upgrades, open-concept conversions, and complete mechanical, electrical, and plumbing (MEP) overhauls for existing residential and commercial properties.',
  },
  {
    id: '7',
    category: 'General',
    question: 'How can I contact MACLOCK ASSOCIATES LTD?',
    answer:
      'You can call our direct telephone line at +234 803 338 9930, visit us at 9 Okeah Street, Port Harcourt, Rivers State, or submit your project details through the consultation page on this website.',
  },
  {
    id: '8',
    category: 'Consultation & Process',
    question: 'Can clients living outside Nigeria or in the diaspora engage MACLOCK?',
    answer:
      'Yes. We regularly work with clients in the diaspora who require reliable, professional local representation and structured construction management for their residential and commercial projects in Port Harcourt and Rivers State, providing transparent milestone reporting and photographic progress updates.',
  },
];
