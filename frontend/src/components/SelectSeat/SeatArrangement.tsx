import { Seat } from "./Seat";

export const SeatArrangement = () => {
    const seats = [
        [["1A", "1B", "1C"], ["1D", "1E", "1F"]],
        [["2A", "2B", "2C"], ["2D", "2E", "2F"]],
        [["3A", "3B", "3C"], ["3D", "3E", "3F"]],
        [["4A", "4B", "4C"], ["4D", "4E", "4F"]],
        [["5A", "5B", "5C"], ["5D", "5E", "5F"]],
        [["6A", "6B", "6C"], ["6D", "6E", "6F"]],
        [["7A", "7B", "7C"], ["7D", "7E", "7F"]],
        [["8A", "8B", "8C"], ["8D", "8E", "8F"]],
        [["9A", "9B", "9C"], ["9D", "9E", "9F"]],
        [["10A", "10B", "10C"], ["10D", "10E", "10F"]],
        [["11A", "11B", "11C"], ["11D", "11E", "11F"]],
        [["12A", "12B", "12C"], ["12D", "12E", "12F"]],
        [["13A", "13B", "13C"], ["13D", "13E", "13F"]],
        [["14A", "14B", "14C"], ["14D", "14E", "14F"]]
    ];

    return (
        <div className="w-[350px] h-[1000px] shrink-0 border-x border-x-gray-900 bg-white">
            {
                seats.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="w-full flex items-center justify-between px-2 py-1"
                    >
                        {
                            row.map((column, columnIndex) => (
                                <div
                                    key={columnIndex}
                                    className="flex items-center justify-center gap-0"
                                >
                                    {
                                        column.map((seatNumber, seatIndex) => (
                                            <Seat key={seatIndex} seatNumber={seatNumber} />
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};