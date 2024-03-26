package limited_edition.Golden_Glitz.Repository;

import limited_edition.Golden_Glitz.Models.Tokens;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Tokens, Long> {

    List<Tokens> findAllByUser_IdAndExpiredFalseAndRevokedFalse(Long id);

    Optional<Tokens> findByToken(String token);
}
