import React from 'react';
// import '../../../lib/styles/admin/adminstyle.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import $ from 'jquery';
// import DataTable from "@bit/adeoy.utils.data-table";
import { MDBDataTable } from 'mdbreact';

const AdminMain = ({ history, listGram }) => {
    // let listGrams = [];
    // if(listGram){
    //     listGrams = listGram;
    // }

    // const data = listGrams;
    // console.log(data);

    const data = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Position',
            field: 'position',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Office',
            field: 'office',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Age',
            field: 'age',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Start date',
            field: 'date',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Salary',
            field: 'salary',
            sort: 'asc',
            width: 100
          }
        ],
        rows: [
          {
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320'
          },
          {
            name: 'Garrett Winters',
            position: 'Accountant',
            office: 'Tokyo',
            age: '63',
            date: '2011/07/25',
            salary: '$170'
          },
          {
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
            age: '66',
            date: '2009/01/12',
            salary: '$86'
          },
          {
            name: 'Cedric Kelly',
            position: 'Senior Javascript Developer',
            office: 'Edinburgh',
            age: '22',
            date: '2012/03/29',
            salary: '$433'
          },
          {
            name: 'Airi Satou',
            position: 'Accountant',
            office: 'Tokyo',
            age: '33',
            date: '2008/11/28',
            salary: '$162'
          },
          {
            name: 'Brielle Williamson',
            position: 'Integration Specialist',
            office: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372'
          },
          {
            name: 'Herrod Chandler',
            position: 'Sales Assistant',
            office: 'San Francisco',
            age: '59',
            date: '2012/08/06',
            salary: '$137'
          },
          {
            name: 'Rhona Davidson',
            position: 'Integration Specialist',
            office: 'Tokyo',
            age: '55',
            date: '2010/10/14',
            salary: '$327'
          },
          {
            name: 'Colleen Hurst',
            position: 'Javascript Developer',
            office: 'San Francisco',
            age: '39',
            date: '2009/09/15',
            salary: '$205'
          },
          {
            name: 'Sonya Frost',
            position: 'Software Engineer',
            office: 'Edinburgh',
            age: '23',
            date: '2008/12/13',
            salary: '$103'
          },
          {
            name: 'Jena Gaines',
            position: 'Office Manager',
            office: 'London',
            age: '30',
            date: '2008/12/19',
            salary: '$90'
          },
          {
            name: 'Quinn Flynn',
            position: 'Support Lead',
            office: 'Edinburgh',
            age: '22',
            date: '2013/03/03',
            salary: '$342'
          },
          {
            name: 'Charde Marshall',
            position: 'Regional Director',
            office: 'San Francisco',
            age: '36',
            date: '2008/10/16',
            salary: '$470'
          },
          {
            name: 'Haley Kennedy',
            position: 'Senior Marketing Designer',
            office: 'London',
            age: '43',
            date: '2012/12/18',
            salary: '$313'
          },
          {
            name: 'Tatyana Fitzpatrick',
            position: 'Regional Director',
            office: 'London',
            age: '19',
            date: '2010/03/17',
            salary: '$385'
          },
          {
            name: 'Michael Silva',
            position: 'Marketing Designer',
            office: 'London',
            age: '66',
            date: '2012/11/27',
            salary: '$198'
          },
          {
            name: 'Paul Byrd',
            position: 'Chief Financial Officer (CFO)',
            office: 'New York',
            age: '64',
            date: '2010/06/09',
            salary: '$725'
          },
          {
            name: 'Gloria Little',
            position: 'Systems Administrator',
            office: 'New York',
            age: '59',
            date: '2009/04/10',
            salary: '$237'
          },
          {
            name: 'Bradley Greer',
            position: 'Software Engineer',
            office: 'London',
            age: '41',
            date: '2012/10/13',
            salary: '$132'
          },
          {
            name: 'Dai Rios',
            position: 'Personnel Lead',
            office: 'Edinburgh',
            age: '35',
            date: '2012/09/26',
            salary: '$217'
          },
          {
            name: 'Jenette Caldwell',
            position: 'Development Lead',
            office: 'New York',
            age: '30',
            date: '2011/09/03',
            salary: '$345'
          },
          {
            name: 'Yuri Berry',
            position: 'Chief Marketing Officer (CMO)',
            office: 'New York',
            age: '40',
            date: '2009/06/25',
            salary: '$675'
          },
          {
            name: 'Caesar Vance',
            position: 'Pre-Sales Support',
            office: 'New York',
            age: '21',
            date: '2011/12/12',
            salary: '$106'
          },
          {
            name: 'Doris Wilder',
            position: 'Sales Assistant',
            office: 'Sidney',
            age: '23',
            date: '2010/09/20',
            salary: '$85'
          },
          {
            name: 'Angelica Ramos',
            position: 'Chief Executive Officer (CEO)',
            office: 'London',
            age: '47',
            date: '2009/10/09',
            salary: '$1'
          },
          {
            name: 'Gavin Joyce',
            position: 'Developer',
            office: 'Edinburgh',
            age: '42',
            date: '2010/12/22',
            salary: '$92'
          },
          {
            name: 'Jennifer Chang',
            position: 'Regional Director',
            office: 'Singapore',
            age: '28',
            date: '2010/11/14',
            salary: '$357'
          },
          {
            name: 'Brenden Wagner',
            position: 'Software Engineer',
            office: 'San Francisco',
            age: '28',
            date: '2011/06/07',
            salary: '$206'
          },
          {
            name: 'Fiona Green',
            position: 'Chief Operating Officer (COO)',
            office: 'San Francisco',
            age: '48',
            date: '2010/03/11',
            salary: '$850'
          },
          {
            name: 'Shou Itou',
            position: 'Regional Marketing',
            office: 'Tokyo',
            age: '20',
            date: '2011/08/14',
            salary: '$163'
          },
          {
            name: 'Michelle House',
            position: 'Integration Specialist',
            office: 'Sidney',
            age: '37',
            date: '2011/06/02',
            salary: '$95'
          },
          {
            name: 'Suki Burks',
            position: 'Developer',
            office: 'London',
            age: '53',
            date: '2009/10/22',
            salary: '$114'
          },
          {
            name: 'Prescott Bartlett',
            position: 'Technical Author',
            office: 'London',
            age: '27',
            date: '2011/05/07',
            salary: '$145'
          },
          {
            name: 'Gavin Cortez',
            position: 'Team Leader',
            office: 'San Francisco',
            age: '22',
            date: '2008/10/26',
            salary: '$235'
          },
          {
            name: 'Martena Mccray',
            position: 'Post-Sales support',
            office: 'Edinburgh',
            age: '46',
            date: '2011/03/09',
            salary: '$324'
          },
          {
            name: 'Unity Butler',
            position: 'Marketing Designer',
            office: 'San Francisco',
            age: '47',
            date: '2009/12/09',
            salary: '$85'
          },
          {
            name: 'Howard Hatfield',
            position: 'Office Manager',
            office: 'San Francisco',
            age: '51',
            date: '2008/12/16',
            salary: '$164'
          },
          {
            name: 'Hope Fuentes',
            position: 'Secretary',
            office: 'San Francisco',
            age: '41',
            date: '2010/02/12',
            salary: '$109'
          },
          {
            name: 'Vivian Harrell',
            position: 'Financial Controller',
            office: 'San Francisco',
            age: '62',
            date: '2009/02/14',
            salary: '$452'
          },
          {
            name: 'Timothy Mooney',
            position: 'Office Manager',
            office: 'London',
            age: '37',
            date: '2008/12/11',
            salary: '$136'
          },
          {
            name: 'Jackson Bradshaw',
            position: 'Director',
            office: 'New York',
            age: '65',
            date: '2008/09/26',
            salary: '$645'
          },
          {
            name: 'Olivia Liang',
            position: 'Support Engineer',
            office: 'Singapore',
            age: '64',
            date: '2011/02/03',
            salary: '$234'
          },
          {
            name: 'Bruno Nash',
            position: 'Software Engineer',
            office: 'London',
            age: '38',
            date: '2011/05/03',
            salary: '$163'
          },
          {
            name: 'Sakura Yamamoto',
            position: 'Support Engineer',
            office: 'Tokyo',
            age: '37',
            date: '2009/08/19',
            salary: '$139'
          },
          {
            name: 'Thor Walton',
            position: 'Developer',
            office: 'New York',
            age: '61',
            date: '2013/08/11',
            salary: '$98'
          },
          {
            name: 'Finn Camacho',
            position: 'Support Engineer',
            office: 'San Francisco',
            age: '47',
            date: '2009/07/07',
            salary: '$87'
          },
          {
            name: 'Serge Baldwin',
            position: 'Data Coordinator',
            office: 'Singapore',
            age: '64',
            date: '2012/04/09',
            salary: '$138'
          },
          {
            name: 'Zenaida Frank',
            position: 'Software Engineer',
            office: 'New York',
            age: '63',
            date: '2010/01/04',
            salary: '$125'
          },
          {
            name: 'Zorita Serrano',
            position: 'Software Engineer',
            office: 'San Francisco',
            age: '56',
            date: '2012/06/01',
            salary: '$115'
          },
          {
            name: 'Jennifer Acosta',
            position: 'Junior Javascript Developer',
            office: 'Edinburgh',
            age: '43',
            date: '2013/02/01',
            salary: '$75'
          },
          {
            name: 'Cara Stevens',
            position: 'Sales Assistant',
            office: 'New York',
            age: '46',
            date: '2011/12/06',
            salary: '$145'
          },
          {
            name: 'Hermione Butler',
            position: 'Regional Director',
            office: 'London',
            age: '47',
            date: '2011/03/21',
            salary: '$356'
          },
          {
            name: 'Lael Greer',
            position: 'Systems Administrator',
            office: 'London',
            age: '21',
            date: '2009/02/27',
            salary: '$103'
          },
          {
            name: 'Jonas Alexander',
            position: 'Developer',
            office: 'San Francisco',
            age: '30',
            date: '2010/07/14',
            salary: '$86'
          },
          {
            name: 'Shad Decker',
            position: 'Regional Director',
            office: 'Edinburgh',
            age: '51',
            date: '2008/11/13',
            salary: '$183'
          },
          {
            name: 'Michael Bruce',
            position: 'Javascript Developer',
            office: 'Singapore',
            age: '29',
            date: '2011/06/27',
            salary: '$183'
          },
          {
            name: 'Donna Snider',
            position: 'Customer Support',
            office: 'New York',
            age: '27',
            date: '2011/01/25',
            salary: '$112'
          },
          {
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320'
          },
          {
            name: 'Garrett Winters',
            position: 'Accountant',
            office: 'Tokyo',
            age: '63',
            date: '2011/07/25',
            salary: '$170'
          },
          {
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
            age: '66',
            date: '2009/01/12',
            salary: '$86'
          },
          {
            name: 'Cedric Kelly',
            position: 'Senior Javascript Developer',
            office: 'Edinburgh',
            age: '22',
            date: '2012/03/29',
            salary: '$433'
          },
          {
            name: 'Airi Satou',
            position: 'Accountant',
            office: 'Tokyo',
            age: '33',
            date: '2008/11/28',
            salary: '$162'
          },
          {
            name: 'Brielle Williamson',
            position: 'Integration Specialist',
            office: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372'
          },
          {
            name: 'Herrod Chandler',
            position: 'Sales Assistant',
            office: 'San Francisco',
            age: '59',
            date: '2012/08/06',
            salary: '$137'
          },
          {
            name: 'Rhona Davidson',
            position: 'Integration Specialist',
            office: 'Tokyo',
            age: '55',
            date: '2010/10/14',
            salary: '$327'
          },
          {
            name: 'Colleen Hurst',
            position: 'Javascript Developer',
            office: 'San Francisco',
            age: '39',
            date: '2009/09/15',
            salary: '$205'
          },
          {
            name: 'Sonya Frost',
            position: 'Software Engineer',
            office: 'Edinburgh',
            age: '23',
            date: '2008/12/13',
            salary: '$103'
          },
          {
            name: 'Jena Gaines',
            position: 'Office Manager',
            office: 'London',
            age: '30',
            date: '2008/12/19',
            salary: '$90'
          },
          {
            name: 'Quinn Flynn',
            position: 'Support Lead',
            office: 'Edinburgh',
            age: '22',
            date: '2013/03/03',
            salary: '$342'
          },
          {
            name: 'Charde Marshall',
            position: 'Regional Director',
            office: 'San Francisco',
            age: '36',
            date: '2008/10/16',
            salary: '$470'
          },
          {
            name: 'Haley Kennedy',
            position: 'Senior Marketing Designer',
            office: 'London',
            age: '43',
            date: '2012/12/18',
            salary: '$313'
          },
          {
            name: 'Tatyana Fitzpatrick',
            position: 'Regional Director',
            office: 'London',
            age: '19',
            date: '2010/03/17',
            salary: '$385'
          },
          {
            name: 'Michael Silva',
            position: 'Marketing Designer',
            office: 'London',
            age: '66',
            date: '2012/11/27',
            salary: '$198'
          },
          {
            name: 'Paul Byrd',
            position: 'Chief Financial Officer (CFO)',
            office: 'New York',
            age: '64',
            date: '2010/06/09',
            salary: '$725'
          },
          {
            name: 'Gloria Little',
            position: 'Systems Administrator',
            office: 'New York',
            age: '59',
            date: '2009/04/10',
            salary: '$237'
          },
          {
            name: 'Bradley Greer',
            position: 'Software Engineer',
            office: 'London',
            age: '41',
            date: '2012/10/13',
            salary: '$132'
          },
          {
            name: 'Dai Rios',
            position: 'Personnel Lead',
            office: 'Edinburgh',
            age: '35',
            date: '2012/09/26',
            salary: '$217'
          },
          {
            name: 'Jenette Caldwell',
            position: 'Development Lead',
            office: 'New York',
            age: '30',
            date: '2011/09/03',
            salary: '$345'
          },
          {
            name: 'Yuri Berry',
            position: 'Chief Marketing Officer (CMO)',
            office: 'New York',
            age: '40',
            date: '2009/06/25',
            salary: '$675'
          },
          {
            name: 'Caesar Vance',
            position: 'Pre-Sales Support',
            office: 'New York',
            age: '21',
            date: '2011/12/12',
            salary: '$106'
          },
          {
            name: 'Doris Wilder',
            position: 'Sales Assistant',
            office: 'Sidney',
            age: '23',
            date: '2010/09/20',
            salary: '$85'
          },
          {
            name: 'Angelica Ramos',
            position: 'Chief Executive Officer (CEO)',
            office: 'London',
            age: '47',
            date: '2009/10/09',
            salary: '$1'
          },
          {
            name: 'Gavin Joyce',
            position: 'Developer',
            office: 'Edinburgh',
            age: '42',
            date: '2010/12/22',
            salary: '$92'
          },
          {
            name: 'Jennifer Chang',
            position: 'Regional Director',
            office: 'Singapore',
            age: '28',
            date: '2010/11/14',
            salary: '$357'
          },
          {
            name: 'Brenden Wagner',
            position: 'Software Engineer',
            office: 'San Francisco',
            age: '28',
            date: '2011/06/07',
            salary: '$206'
          },
          {
            name: 'Fiona Green',
            position: 'Chief Operating Officer (COO)',
            office: 'San Francisco',
            age: '48',
            date: '2010/03/11',
            salary: '$850'
          },
          {
            name: 'Shou Itou',
            position: 'Regional Marketing',
            office: 'Tokyo',
            age: '20',
            date: '2011/08/14',
            salary: '$163'
          },
          {
            name: 'Michelle House',
            position: 'Integration Specialist',
            office: 'Sidney',
            age: '37',
            date: '2011/06/02',
            salary: '$95'
          },
          {
            name: 'Suki Burks',
            position: 'Developer',
            office: 'London',
            age: '53',
            date: '2009/10/22',
            salary: '$114'
          },
          {
            name: 'Prescott Bartlett',
            position: 'Technical Author',
            office: 'London',
            age: '27',
            date: '2011/05/07',
            salary: '$145'
          },
          {
            name: 'Gavin Cortez',
            position: 'Team Leader',
            office: 'San Francisco',
            age: '22',
            date: '2008/10/26',
            salary: '$235'
          },
          {
            name: 'Martena Mccray',
            position: 'Post-Sales support',
            office: 'Edinburgh',
            age: '46',
            date: '2011/03/09',
            salary: '$324'
          },
          {
            name: 'Unity Butler',
            position: 'Marketing Designer',
            office: 'San Francisco',
            age: '47',
            date: '2009/12/09',
            salary: '$85'
          },
          {
            name: 'Howard Hatfield',
            position: 'Office Manager',
            office: 'San Francisco',
            age: '51',
            date: '2008/12/16',
            salary: '$164'
          },
          {
            name: 'Hope Fuentes',
            position: 'Secretary',
            office: 'San Francisco',
            age: '41',
            date: '2010/02/12',
            salary: '$109'
          },
          {
            name: 'Vivian Harrell',
            position: 'Financial Controller',
            office: 'San Francisco',
            age: '62',
            date: '2009/02/14',
            salary: '$452'
          },
          {
            name: 'Timothy Mooney',
            position: 'Office Manager',
            office: 'London',
            age: '37',
            date: '2008/12/11',
            salary: '$136'
          },
          {
            name: 'Jackson Bradshaw',
            position: 'Director',
            office: 'New York',
            age: '65',
            date: '2008/09/26',
            salary: '$645'
          },
          {
            name: 'Olivia Liang',
            position: 'Support Engineer',
            office: 'Singapore',
            age: '64',
            date: '2011/02/03',
            salary: '$234'
          },
          {
            name: 'Bruno Nash',
            position: 'Software Engineer',
            office: 'London',
            age: '38',
            date: '2011/05/03',
            salary: '$163'
          },
          {
            name: 'Sakura Yamamoto',
            position: 'Support Engineer',
            office: 'Tokyo',
            age: '37',
            date: '2009/08/19',
            salary: '$139'
          },
          {
            name: 'Thor Walton',
            position: 'Developer',
            office: 'New York',
            age: '61',
            date: '2013/08/11',
            salary: '$98'
          },
          {
            name: 'Finn Camacho',
            position: 'Support Engineer',
            office: 'San Francisco',
            age: '47',
            date: '2009/07/07',
            salary: '$87'
          },
          {
            name: 'Serge Baldwin',
            position: 'Data Coordinator',
            office: 'Singapore',
            age: '64',
            date: '2012/04/09',
            salary: '$138'
          },
          {
            name: 'Zenaida Frank',
            position: 'Software Engineer',
            office: 'New York',
            age: '63',
            date: '2010/01/04',
            salary: '$125'
          },
          {
            name: 'Zorita Serrano',
            position: 'Software Engineer',
            office: 'San Francisco',
            age: '56',
            date: '2012/06/01',
            salary: '$115'
          },
          {
            name: 'Jennifer Acosta',
            position: 'Junior Javascript Developer',
            office: 'Edinburgh',
            age: '43',
            date: '2013/02/01',
            salary: '$75'
          },
          {
            name: 'Cara Stevens',
            position: 'Sales Assistant',
            office: 'New York',
            age: '46',
            date: '2011/12/06',
            salary: '$145'
          },
          {
            name: 'Hermione Butler',
            position: 'Regional Director',
            office: 'London',
            age: '47',
            date: '2011/03/21',
            salary: '$356'
          },
          {
            name: 'Lael Greer',
            position: 'Systems Administrator',
            office: 'London',
            age: '21',
            date: '2009/02/27',
            salary: '$103'
          },
          {
            name: 'Jonas Alexander',
            position: 'Developer',
            office: 'San Francisco',
            age: '30',
            date: '2010/07/14',
            salary: '$86'
          },
          {
            name: 'Shad Decker',
            position: 'Regional Director',
            office: 'Edinburgh',
            age: '51',
            date: '2008/11/13',
            salary: '$183'
          },
          {
            name: 'Michael Bruce',
            position: 'Javascript Developer',
            office: 'Singapore',
            age: '29',
            date: '2011/06/27',
            salary: '$183'
          },
          {
            name: 'Donna Snider',
            position: 'Customer Support',
            office: 'New York',
            age: '27',
            date: '2011/01/25',
            salary: '$112'
          }
        ]
      };

    // const data = [
    //     {"id":1,"first_name":"Herold","last_name":"Hardwich","email":"hhardwich0@geocities.jp","gender":"Male","ip_address":"131.149.218.73"},
    //     {"id":2,"first_name":"Martelle","last_name":"Peddowe","email":"mpeddowe1@feedburner.com","gender":"Female","ip_address":"249.160.225.74"},
    //     {"id":3,"first_name":"Devan","last_name":"Foulstone","email":"dfoulstone2@opera.com","gender":"Female","ip_address":"28.60.122.122"},
    //     {"id":4,"first_name":"Rice","last_name":"Halsey","email":"rhalsey3@goo.gl","gender":"Male","ip_address":"49.93.93.32"},
    //     {"id":5,"first_name":"Corrina","last_name":"Fitzer","email":"cfitzer4@harvard.edu","gender":"Female","ip_address":"54.248.51.249"},
    //     {"id":6,"first_name":"Kermy","last_name":"Bett","email":"kbett5@wufoo.com","gender":"Male","ip_address":"43.3.243.27"},
    //     {"id":7,"first_name":"Doroteya","last_name":"Kingh","email":"dkingh6@ucla.edu","gender":"Female","ip_address":"147.151.8.68"},
    //     {"id":8,"first_name":"Obed","last_name":"Iacovino","email":"oiacovino7@phpbb.com","gender":"Male","ip_address":"196.237.176.255"},
    //     {"id":9,"first_name":"Kelcy","last_name":"Crowhurst","email":"kcrowhurst8@earthlink.net","gender":"Female","ip_address":"133.118.121.242"},
    //     {"id":10,"first_name":"Lorena","last_name":"Charlot","email":"lcharlot9@mozilla.org","gender":"Female","ip_address":"37.66.237.110"},
    //     {"id":11,"first_name":"Iormina","last_name":"Falcus","email":"ifalcusa@eventbrite.com","gender":"Female","ip_address":"37.178.65.32"},
    //     {"id":12,"first_name":"Nathalie","last_name":"Joderli","email":"njoderlib@i2i.jp","gender":"Female","ip_address":"222.244.240.186"},
    //     {"id":13,"first_name":"Juan","last_name":"Cranmer","email":"jcranmerc@paginegialle.it","gender":"Male","ip_address":"10.174.5.52"},
    //     {"id":14,"first_name":"Ricoriki","last_name":"O'Kynsillaghe","email":"rokynsillaghed@tiny.cc","gender":"Male","ip_address":"125.250.102.200"},
    //     {"id":15,"first_name":"Ky","last_name":"Batsford","email":"kbatsforde@simplemachines.org","gender":"Male","ip_address":"10.78.70.171"},
    //     {"id":15,"first_name":"Ky","last_name":"Batsford","email":"kbatsforde@simplemachines.org","gender":"Male","ip_address":"10.78.70.171"},
    //     {"id":16,"first_name":"Dorian","last_name":"Abercrombie","email":"dabercrombief@wikimedia.org","gender":"Male","ip_address":"155.246.97.152"},
    //     {"id":17,"first_name":"Veradis","last_name":"Misken","email":"vmiskeng@imageshack.us","gender":"Female","ip_address":"204.17.124.147"},
    //     {"id":18,"first_name":"Bettine","last_name":"Cawthorne","email":"bcawthorneh@skyrock.com","gender":"Female","ip_address":"64.79.250.25"},
    //     {"id":19,"first_name":"Jo","last_name":"McDermott","email":"jmcdermotti@prlog.org","gender":"Male","ip_address":"94.250.164.209"},
    //     {"id":20,"first_name":"Octavia","last_name":"Tomaszynski","email":"otomaszynskij@washingtonpost.com","gender":"Female","ip_address":"48.146.63.242"},
    //     {"id":21,"first_name":"Jerrilee","last_name":"Hucquart","email":"jhucquartk@edublogs.org","gender":"Female","ip_address":"138.237.243.250"},
    //     {"id":22,"first_name":"Corine","last_name":"Londing","email":"clondingl@ucla.edu","gender":"Female","ip_address":"31.89.0.174"},
    //     {"id":23,"first_name":"Norine","last_name":"Mashro","email":"nmashrom@ft.com","gender":"Female","ip_address":"147.26.203.119"},
    //     {"id":24,"first_name":"Moritz","last_name":"Siebart","email":"msiebartn@addthis.com","gender":"Male","ip_address":"26.226.94.239"},
    //     {"id":25,"first_name":"Read","last_name":"Ranner","email":"rrannero@bbc.co.uk","gender":"Male","ip_address":"65.38.128.207"},
    //     {"id":26,"first_name":"Leshia","last_name":"Rimmington","email":"lrimmingtonp@vkontakte.ru","gender":"Female","ip_address":"206.61.138.105"},
    //     {"id":27,"first_name":"Corbie","last_name":"Matiewe","email":"cmatieweq@surveymonkey.com","gender":"Male","ip_address":"252.182.27.222"},
    //     {"id":28,"first_name":"Ruddy","last_name":"Cunnah","email":"rcunnahr@reuters.com","gender":"Male","ip_address":"0.85.17.232"},
    //     {"id":29,"first_name":"Adan","last_name":"Bellord","email":"abellords@businessweek.com","gender":"Male","ip_address":"242.149.192.210"},
    //     {"id":30,"first_name":"Basia","last_name":"Daines","email":"bdainest@list-manage.com","gender":"Female","ip_address":"185.127.51.156"},
    //     {"id":31,"first_name":"Abdel","last_name":"Humpherson","email":"ahumphersonu@odnoklassniki.ru","gender":"Male","ip_address":"9.16.205.216"},
    //     {"id":32,"first_name":"Shanie","last_name":"Neild","email":"sneildv@wordpress.org","gender":"Female","ip_address":"83.43.100.247"},
    //     {"id":33,"first_name":"Konrad","last_name":"Holtom","email":"kholtomw@bloomberg.com","gender":"Male","ip_address":"184.27.109.0"},
    //     {"id":34,"first_name":"Kristian","last_name":"Lanigan","email":"klaniganx@bloglovin.com","gender":"Male","ip_address":"223.86.3.251"},
    //     {"id":35,"first_name":"Christal","last_name":"Ledbury","email":"cledburyy@amazon.co.jp","gender":"Female","ip_address":"136.102.198.178"},
    //     {"id":36,"first_name":"Nert","last_name":"Cordelle","email":"ncordellez@mit.edu","gender":"Female","ip_address":"204.72.111.152"},
    //     {"id":37,"first_name":"Parke","last_name":"Rubinowitz","email":"prubinowitz10@vkontakte.ru","gender":"Male","ip_address":"136.54.251.243"},
    //     {"id":38,"first_name":"Mariejeanne","last_name":"Larrad","email":"mlarrad11@meetup.com","gender":"Female","ip_address":"5.204.139.53"},
    //     {"id":39,"first_name":"Bonnie","last_name":"Stradling","email":"bstradling12@feedburner.com","gender":"Female","ip_address":"186.149.44.55"},
    //     {"id":40,"first_name":"Worthy","last_name":"Mordacai","email":"wmordacai13@wix.com","gender":"Male","ip_address":"77.41.58.254"},
    //     {"id":41,"first_name":"Jayne","last_name":"Golightly","email":"jgolightly14@flickr.com","gender":"Female","ip_address":"98.19.225.194"},
    //     {"id":42,"first_name":"Bondy","last_name":"Orriss","email":"borriss15@amazon.com","gender":"Male","ip_address":"39.123.196.45"},
    //     {"id":43,"first_name":"Dyan","last_name":"Lydiatt","email":"dlydiatt16@themeforest.net","gender":"Female","ip_address":"107.104.251.161"},
    //     {"id":44,"first_name":"Hort","last_name":"Dickinson","email":"hdickinson17@dell.com","gender":"Male","ip_address":"18.55.116.24"},
    //     {"id":45,"first_name":"Gerrie","last_name":"Grattan","email":"ggrattan18@pinterest.com","gender":"Male","ip_address":"196.45.165.85"},
    //     {"id":46,"first_name":"Donalt","last_name":"Halfacree","email":"dhalfacree19@sbwire.com","gender":"Male","ip_address":"6.254.73.227"},
    //     {"id":47,"first_name":"Agnese","last_name":"Furze","email":"afurze1a@over-blog.com","gender":"Female","ip_address":"21.105.111.103"},
    //     {"id":48,"first_name":"Ethelyn","last_name":"Farthin","email":"efarthin1b@arstechnica.com","gender":"Female","ip_address":"18.189.143.170"},
    //     {"id":49,"first_name":"Ginni","last_name":"Hince","email":"ghince1c@ow.ly","gender":"Female","ip_address":"187.52.210.225"},
    //     {"id":50,"first_name":"Errick","last_name":"Dallin","email":"edallin1d@studiopress.com","gender":"Male","ip_address":"80.209.165.22"}
    // ];

    // const columns = [
    //     { title: "#", data: "" },
    //     { title: "닉네임", data: "User.user_nick" },
    //     { title: "내용", data: "content" },
    //     { title: "좋아요", data: "likeCount" }
    // ];
    
    // const click = (row) => {
    //     console.log(row);
    //     history.push('/Admin_gram_read/12345');
    // };

    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/f4b52f1d75.js" crossorigin="anonymous"></script>
            </Helmet>
            <h3><i class="fa fa-angle-right"></i> 메리퍼플그램</h3>
            {/* <DataTable
                data={data}
                columns={columns}
                striped={true}
                hover={true}
                responsive={true}
                onClickRow={click}
            /> */}
            <MDBDataTable
                striped
                bordered
                hover
                data={data}
            />
        </>
    )
}

export default AdminMain;