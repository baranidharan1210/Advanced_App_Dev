package limited_edition.Golden_Glitz.Repository;

import limited_edition.Golden_Glitz.Models.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Bookings, Long> {
}
