package limited_edition.Golden_Glitz.Services;

import limited_edition.Golden_Glitz.Models.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);
    User updateUser(Long id, User user);
    void deleteUser(Long id);
}