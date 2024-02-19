import React from 'react';
import { Bike } from '../../Models/Bike';
import Feedback from '../Feedback';
import { Link } from 'react-router-dom';

const dateFromIsoToString = (date: number) =>
  new Date(date).toLocaleDateString();

const Table = ({ bikes }: { bikes: Bike[] }) => {
  if (!bikes.length) {
    return (
      <Feedback status="ok" message="There are no missing bikes in the area" />
    );
  }
  return (
    <section className="w-full my-10 overflow-x-auto">
      <table className="w-full text-center table-auto">
        <thead>
          <tr className="h-12  px-6 border-b border-slate-700 text-sm font-medium  bg-slate-100">
            <th>Date of Theft</th>
            <th>Case title</th>
            <th>Description</th>
            <th>Picture of Bike</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {React.Children.toArray(
            bikes.map((bike) => (
              <tr className="h-20 px-6 border-b border-slate-700 text-sm font-normal">
                <td>{dateFromIsoToString(bike.date_stolen)}</td>
                <td>{bike.title}</td>
                <td>
                  {bike.description && bike.description?.length > 0
                    ? `${bike.description?.substring(0, 100)}...`
                    : '-'}
                </td>
                <td>
                  {bike.thumb ? (
                    <img
                      className="h-10 w-20 object-cover mx-auto"
                      src={bike.thumb}
                      alt={bike.thumb}
                    />
                  ) : (
                    'No picture available'
                  )}
                </td>
                <td>
                  <Link to={`/details/${bike.id}`}>Details</Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
