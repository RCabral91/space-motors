import { Link } from 'react-router-dom';

import { VehiclesType } from '../../@types/Vehicles';

interface IVehiclesTypeProps {
  vehicle: VehiclesType;
}

const Card: React.FC<IVehiclesTypeProps> = ({ vehicle }) => {
  return (
    <div className="text-center d-flex flex-column pt-3 color-white">
      <div className="card border-5 bg-black">
        <div className="card-body d-flex flex-column">
          <Link
            className="text-decoration-none"
            to={`/checkout/${vehicle.name}`}
          >
            <h6 className="card-subtitle mb-1 text-muted text-start">
              <small>{vehicle?.model}</small>
            </h6>

            <h5 className="text-warning text-start">{vehicle?.name}</h5>

            <div className="text-white d-flex justify-content-between">
              Largura
              <div>{vehicle?.length}</div>
            </div>

            <div className="text-white d-flex justify-content-between">
              Velocidade<div>{vehicle?.max_atmosphering_speed}</div>
            </div>

            <div className="text-white d-flex justify-content-between">
              Equipe<div>{vehicle?.crew}</div>
            </div>

            <div className="text-white d-flex justify-content-between">
              Passageiros<div>{vehicle?.passengers}</div>
            </div>

            <div className="text-white d-flex justify-content-between">
              Capacidade de carga<div>{vehicle?.cargo_capacity}</div>
            </div>

            {vehicle?.cost_in_credits !== 'unknown' ? (
              <div className="text-warning text-start fw-bold fs-4 mt-3">
                ¢ {vehicle?.cost_in_credits}
              </div>
            ) : (
              <div className="text-warning text-start fw-bold fs-6 mt-3">
                <small>Não há no estoque</small>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
