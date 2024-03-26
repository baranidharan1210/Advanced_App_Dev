package limited_edition.Golden_Glitz.Repository;

import limited_edition.Golden_Glitz.Models.Events;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository<Events, Long> {

    Events findByCategory(String category);
}
