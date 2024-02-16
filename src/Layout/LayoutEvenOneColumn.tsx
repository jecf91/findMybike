import React from 'react';

const LayoutEvenOneColumn = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container px-6 m-auto h-screen">
      <section className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 py-6 h-full ">
        <div className="col-span-4 md:col-span-8 lg:col-span-12 ">
          {children}
        </div>
      </section>
    </main>
  );
};

export default LayoutEvenOneColumn;
