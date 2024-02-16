const statusColor = {
  ok: 'text-slate-950',
  error: 'text-red-600	',
};

const Feedback = ({
  message,
  status = 'ok',
}: {
  message: string;
  status: 'ok' | 'error';
}) => {
  let styleClass = statusColor[status];

  return (
    <div className="h-screen flex justify-center items-center">
      <p className={`${styleClass} font-bold`}>{message}</p>
    </div>
  );
};

export default Feedback;
